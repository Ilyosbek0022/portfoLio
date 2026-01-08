import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./rwd.css"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ILyosbekApp",
  description: "ILyosbek Nuriddinov's own portfolio,",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
