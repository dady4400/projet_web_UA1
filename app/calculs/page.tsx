'use client';

import { useState } from 'react';
import type { Operation, CalculResult } from '@/types';

export default function CalculsPage() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<Operation>('+');
  const [result, setResult] = useState<CalculResult>({ result: null, message: '', isError: false });

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult({
        result: null,
        message: '❌ Erreur : Veuillez entrer des valeurs numériques valides',
        isError: true,
      });
      return;
    }

    let calculatedResult: number;
    switch (operation) {
      case '+':
        calculatedResult = n1 + n2;
        break;
      case '-':
        calculatedResult = n1 - n2;
        break;
      case '*':
        calculatedResult = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResult({
            result: null,
            message: '❌ Erreur : Division par zéro impossible',
            isError: true,
          });
          return;
        }
        calculatedResult = n1 / n2;
        break;
    }

    setResult({
      result: calculatedResult,
      message: '✅ Succès : Calcul effectué avec succès',
      isError: false,
    });
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setOperation('+');
    setResult({ result: null, message: '', isError: false });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">🧮 Calculatrice de Voyage</h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Premier nombre</label>
            <input
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="Entrez le premier nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deuxième nombre</label>
            <input
              type="text"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="Entrez le deuxième nombre"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Opération</label>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: '+', label: '➕ Addition' },
              { value: '-', label: '➖ Soustraction' },
              { value: '*', label: '✖️ Multiplication' },
              { value: '/', label: '➗ Division' },
            ].map((op) => (
              <button
                key={op.value}
                onClick={() => setOperation(op.value as Operation)}
                className={`py-3 px-4 rounded-lg font-medium transition-all ${
                  operation === op.value
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCalculate}
            className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            Calculer
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      {result.message && (
        <div
          className={`rounded-xl p-6 mb-8 ${
            result.isError ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'
          }`}
        >
          <p className={`font-semibold ${result.isError ? 'text-red-700' : 'text-green-700'}`}> 
            {result.message}
          </p>
          {result.result !== null && (
            <p className="text-3xl font-bold text-gray-800 mt-2">Résultat : {result.result}</p>
          )}
        </div>
      )}

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">💡 Exemples d'utilisation</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Calculez votre budget de voyage en additionnant les dépenses</li>
          <li>• Convertissez des devises en utilisant les taux de change</li>
          <li>• Estimez la distance entre deux destinations</li>
          <li>• Divisez les coûts entre plusieurs voyageurs</li>
        </ul>
      </div>
    </div>
  );
}