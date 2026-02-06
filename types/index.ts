// Types pour les clients
export interface Client {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  destination: string;
  dateDepart: string;
}

// Types pour les calculs
export type Operation = '+' | '-' | '*' | '/';

export interface CalculResult {
  result: number | null;
  message: string;
  isError: boolean;
}

// Types pour l'authentification
export interface LoginCredentials {
  username: string;
  password: string;
}