import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Enrique's Blog",
    template: `%s | Enrique's Blog`,
  },
  description:
    "Aquí es donde comparto mi pasión por la fotografía, la programación y el diseño.",
};

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-bgLight  text-zinc-800 dark:bg-bgDark dark:text-zinc-200 `}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <div className="mt-20 pb-14">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
