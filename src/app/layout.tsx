import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Parikhit Kurmi — Full Stack Developer",
  description:
    "Full Stack Developer specializing in NestJS, React, Next.js, and building enterprise SaaS platforms. Portfolio showcasing projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "NestJS",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Parikhit Kurmi",
  ],
  authors: [{ name: "Parikhit Kurmi" }],
  openGraph: {
    title: "Parikhit Kurmi — Full Stack Developer",
    description:
      "Full Stack Developer specializing in NestJS, React, Next.js, and building enterprise SaaS platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-surface text-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
