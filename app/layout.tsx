import './globals.css';

import type { Metadata } from 'next';

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
