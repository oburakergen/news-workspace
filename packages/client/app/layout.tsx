import "../styles/sass/globals.scss";
import type { Metadata } from "next";
import React from "react";
import { roboto } from "@/styles/fonts/fonts";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="tr-TR">
      <body id="__next" className={`${roboto.className}`}>
      <Header />
      {children}
      </body>
    </html>
  );
};

export default RootLayout;