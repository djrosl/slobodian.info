import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConfigureAmplifyClientSide from "../../components/ConfigureAmplifyClientSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming Soon | Slobodian",
  description: "Coming very soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ConfigureAmplifyClientSide />
          {children}
        </>
      </body>
    </html>
  );
}
