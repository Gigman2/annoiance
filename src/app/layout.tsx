import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annoiance",
  description: "Helping friends and family shouldn't be annoying because of form :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
 