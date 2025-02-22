import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.scss";
import Nav from "@blocks/Nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Supersenang | Boutique Resort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}