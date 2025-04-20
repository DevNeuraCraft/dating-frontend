'use client';
import { Rubik } from 'next/font/google';

import TelegramProvider from '@core/telegram/provider';
import useAuth from '@hooks/use-auth';

import '@styles/globals.css';
import useStartParam from '@hooks/use-start-param';

const rubik = Rubik({ subsets: ['cyrillic'], weight: ['300', '400', '500'] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();
  useStartParam();
  return (
    <html lang="ru">
    <body className={`${rubik.className} antialiased`}>
    <TelegramProvider>{children}</TelegramProvider>
    </body>
    </html>
  );
}
