import './globals.css';

import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/sonner';
import { DarkModeChecker } from '@/components/utility/DarkModeChecker';
import { DemodalContainer } from '@/components/utility/DemodalContainer';

export const metadata: Metadata = {
  title: 'Email DnD Provider',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster />
      </body>
      <DarkModeChecker />
      <DemodalContainer />
    </html>
  );
}
