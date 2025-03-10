"use client";
import { Rubik } from "next/font/google";

import TelegramProvider from "./src/core/telegram/provider";
import useAuth from "./src/hooks/use-auth";

import "@styles/globals.css";

const rubik = Rubik({ subsets: ["cyrillic"], weight: ["300", "400", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();

  return (
    <html lang="ru">
      <body className={`${rubik.className} antialiased`}>
        <TelegramProvider>{children}</TelegramProvider>
      </body>
    </html>
  );
}