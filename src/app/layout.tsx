import "./globals.css";
import { Rubik } from "next/font/google";
import TelegramProvider from "./src/core/telegram/provider";

const rubik = Rubik({ subsets: ["cyrillic"], weight: ["300", "400", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${rubik.className} antialiased`}><TelegramProvider>{children}</TelegramProvider></body>
    </html>
  );
}
