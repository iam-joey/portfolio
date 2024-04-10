import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedCursor } from '@/components';
import { Nav } from '@/components';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iamjoey',
  description: 'A student and backend developer based on Bangalore, India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" dark:bg-black bg-white dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          <Nav />
          <AnimatedCursor />
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
