import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mi Web Divulgativa",
    template: "%s | Mi Web Divulgativa",
  },
  description: "Sitio divulgativo con enfoque en SEO, tecnología y buenas prácticas.",
  keywords: ["SEO", "Next.js", "Web Divulgativa", "Tecnología"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Mi Web Divulgativa",
    description: "Un sitio divulgativo con SEO optimizado y estructura profesional.",
    url: "https://miwebdivulgativa.com", // cámbialo cuando hagas el deploy
    siteName: "Mi Web Divulgativa",
    images: [
      {
        url: "/og-image.png", // puedes añadir este archivo luego en /public
        width: 1200,
        height: 630,
        alt: "Mi Web Divulgativa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* 🔹 Header */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Mi Web Divulgativa</h1>
            <ul className="flex gap-4">
              <li><a href="/" className="hover:text-blue-600">Inicio</a></li>
              <li><a href="/about" className="hover:text-blue-600">Sobre mí</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contacto</a></li>
            </ul>
          </nav>
        </header>

        {/* 🔹 Contenido dinámico */}
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        {/* 🔹 Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © {new Date().getFullYear()} Mi Web Divulgativa. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
