'use client';

import { useState } from 'react';
import type { Client, LoginCredentials } from '@/types';

export default function ClientsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<LoginCredentials>({ username: '', password: '' });
  const [error, setError] = useState<string>('');

  const clients: Client[] = [
    { id: 1, nom: 'Tremblay', prenom: 'Marie', email: 'marie.tremblay@email.com', telephone: '+1 (514) 555-0101', destination: 'Paris, France', dateDepart: '15/03/2026' },
    { id: 2, nom: 'Gagnon', prenom: 'Jean', email: 'jean.gagnon@email.com', telephone: '+1 (514) 555-0102', destination: 'Tokyo, Japon', dateDepart: '20/04/2026' },
    { id: 3, nom: 'Roy', prenom: 'Sophie', email: 'sophie.roy@email.com', telephone: '+1 (514) 555-0103', destination: 'Rome, Italie', dateDepart: '10/05/2026' },
    { id: 4, nom: 'Côté', prenom: 'Michel', email: 'michel.cote@email.com', telephone: '+1 (514) 555-0104', destination: 'Bangkok, Thaïlande', dateDepart: '05/06/2026' },
    { id: 5, nom: 'Bouchard', prenom: 'Isabelle', email: 'isabelle.bouchard@email.com', telephone: '+1 (514) 555-0105', destination: 'Barcelone, Espagne', dateDepart: '18/07/2026' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('❌ Erreur : Identifiant ou mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">👥 Liste des Clients</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Authentification requise</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="admin123"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
            >
              Se connecter
            </button>
          </form>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">{error}</p>
            </div>
          )}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Identifiants de test :</strong><br />
              Utilisateur : admin<br />
              Mot de passe : admin123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">👥 Liste des Clients</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg"
        >
          Se déconnecter
        </button>
      </div>

      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-8">
        <p className="text-green-700 font-semibold">✅ Succès : Vous êtes connecté en tant qu'administrateur</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Nom</th>
                <th className="px-6 py-4 text-left">Prénom</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Téléphone</th>
                <th className="px-6 py-4 text-left">Destination</th>
                <th className="px-6 py-4 text-left">Date de départ</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-800">{client.id}</td>
                  <td className="px-6 py-4 text-gray-700">{client.nom}</td>
                  <td className="px-6 py-4 text-gray-700">{client.prenom}</td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${client.email}`} className="text-primary hover:text-blue-600 transition-colors">
                      {client.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{client.telephone}</td>
                  <td className="px-6 py-4 text-gray-700">{client.destination}</td>
                  <td className="px-6 py-4 text-gray-700">{client.dateDepart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <p className="text-lg font-semibold text-gray-800">
          Total : <span className="text-primary">{clients.length} clients</span>
        </p>
      </div>
    </div>
  );
}