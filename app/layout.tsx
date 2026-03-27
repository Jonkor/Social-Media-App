import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}