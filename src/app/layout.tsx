import { unbounded } from '@/app/fonts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'ІЯК 2023',
  description: "Ласкаво просимо на Інженерний Ярмарок Кар'єри!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} bg-black text-white`}>
        <Header />
        <main className="font-unbounded bg-black text-white content-container main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
