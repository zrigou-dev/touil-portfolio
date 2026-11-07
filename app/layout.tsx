import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({ variable: "--f-display", subsets: ["latin"], style: ["normal", "italic"] });
const sans = Hanken_Grotesk({ variable: "--f-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--f-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meryem Touil — Développeur Full Stack Symfony & React · Scrum Master",
  description:
    "Portfolio de Meryem Touil : développeur Full Stack (Symfony, React.js) et Scrum Master certifié. Plus de 3 ans d’expérience SaaS, plateformes d’envergure, ouvert à un poste à temps plein.",
  openGraph: {
    title: "Meryem Touil — Full Stack Developer & Scrum Master",
    description: "Symfony · React.js · API integrations · Scrum. Open to full-time opportunities.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0b0a10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Meryem Touil",
              jobTitle: "Full Stack Developer & Scrum Master",
              email: "mailto:touilmeryem121@gmail.com",
              url: "https://linkedin.com/in/meryem-touil-b2506928b",
              address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
              knowsAbout: ["Symfony", "React.js", "PHP", "PostgreSQL", "Scrum", "REST APIs"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
