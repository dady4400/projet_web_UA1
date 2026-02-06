import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TravelDream - Votre monde à portée de main',
  description: 'Agence de voyage TravelDream - Explorez le monde avec nous',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-6">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}