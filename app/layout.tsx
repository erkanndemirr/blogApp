import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Blog | Erkan Demir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {/* <Navbar /> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
