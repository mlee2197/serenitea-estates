import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Dosis, Inter } from "next/font/google";

const inter = Inter({
  weight: ["300"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const dosis = Dosis({
  weight: ["600"],
  variable: "--font-dosis",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <main className={`${inter.variable} ${dosis.variable}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
