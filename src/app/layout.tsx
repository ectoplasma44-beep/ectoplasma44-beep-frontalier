import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MentionLegale from "@/components/MentionLegale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Mon Impôt Frontalier — aide à la déclaration franco-suisse",
    template: "%s — Mon Impôt Frontalier",
  },
  description:
    "Outils gratuits et kit d'assistance à la déclaration pour les frontaliers franco-suisses. Estimations indicatives, sources officielles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900">
        <header className="border-b border-slate-200">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold">
              Mon Impôt Frontalier
            </Link>
            <div className="flex gap-5 text-sm text-slate-600">
              <Link href="/calculateurs" className="hover:text-slate-900">
                Calculateurs
              </Link>
              <Link
                href="/assistance-declaration"
                className="hover:text-slate-900"
              >
                Kit d&apos;assistance
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl space-y-3 px-4 py-8">
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <Link href="/calculateurs" className="hover:text-slate-900">
                Calculateurs
              </Link>
              <Link href="/frontalier/geneve" className="hover:text-slate-900">
                Guide Genève
              </Link>
              <Link href="/faq" className="hover:text-slate-900">
                FAQ
              </Link>
              <Link
                href="/assistance-declaration"
                className="hover:text-slate-900"
              >
                Kit d&apos;assistance
              </Link>
            </div>
            <p className="text-sm font-medium text-slate-700">
              Mon Impôt Frontalier
            </p>
            <MentionLegale />
          </div>
        </footer>
      </body>
    </html>
  );
}
