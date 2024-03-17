import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";
import Providers from "./providers";


export const metadata: Metadata = {
  title: "Todo App",
  description: "Full stack Todo Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {/* <Home /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
