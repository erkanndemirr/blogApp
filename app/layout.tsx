import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./Provider";





export const metadata: Metadata = {
  title: "ibloger.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
