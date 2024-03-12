import type { Metadata } from "next";

import { ReactToast } from "@/shared";
import { Heebo } from "next/font/google";

import StoreProvider from "./StoreProvider";

import "./globals.css";
const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Portfolio",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={heebo.className}>
          {children}
          <ReactToast/>
        </body>

      </html>
    </StoreProvider>
   
  );

}

