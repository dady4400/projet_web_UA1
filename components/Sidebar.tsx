'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const sidebarLinks = [
    { href: '/', label: '🏠 Accueil', icon: '🏠' },
    { href: '/calculs', label: '🧮 Calculs', icon: '🧮' },
    { href: '/clients', label: '👥 Clients', icon: '👥' },
  ];

  return (
    <aside className="w-64 bg-white shadow-xl h-full fixed left-0 top-0 pt-24 hidden lg:block">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-primary pb-2">
          Navigation
        </h2>
        <nav className="space-y-3">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-primary text-white shadow-md transform scale-105'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-primary'
              }`}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium">{link.label.split(' ')[1]}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-gradient-to-br from-primary to-secondary rounded-lg text-white">
          <p className="text-sm font-semibold mb-2">💡 Astuce du jour</p>
          <p className="text-xs">Explorez nos destinations exotiques et profitez de réductions jusqu'à 30%!</p>
        </div>
      </div>
    </aside>
  );
}