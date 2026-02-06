'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/calculs', label: 'Calculs' },
    { href: '/clients', label: 'Liste Clients' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col">
            <Link href="/" className="text-3xl font-bold hover:text-accent transition-colors">
              ✈️ TravelDream
            </Link>
            <span className="text-sm italic text-blue-100">Votre monde à portée de main</span>
          </div>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-white text-primary shadow-md'
                    : 'hover:bg-blue-400 hover:shadow-md'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-white hover:text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 px-4 rounded-lg mb-2 ${
                pathname === link.href ? 'bg-white text-primary' : 'hover:bg-blue-400'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}