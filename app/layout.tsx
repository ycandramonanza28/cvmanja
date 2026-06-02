import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasa CV Manja — CV Profesional ATS & Kreatif",
  description: "Layanan pembuatan CV profesional berkualitas tinggi. Template ATS-friendly dan CV Kreatif untuk semua jenjang karir. Proses cepat 24 jam, revisi gratis.",
  keywords: "jasa cv, cv ats, cv kreatif, template cv profesional, buat cv online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
