export const metadata = {
  title: "Mi Web Divulgativa - Ciencia explicada fácil",
  description: "Un espacio divulgativo con artículos y recursos para entender la ciencia de forma clara.",
  keywords: "ciencia, divulgación, educación, artículos, investigación",
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Mi Web Divulgativa",
    description: "Un espacio divulgativo con artículos y recursos para entender la ciencia de forma clara.",
    url: "https://miwebdivulgativa.vercel.app",
    siteName: "Mi Web Divulgativa",
    images: [
      {
        url: "/og-image.jpg",
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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <header className="p-4 shadow-md">
          <h1 className="text-xl font-bold">Mi Web Divulgativa</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mi Web Divulgativa
        </footer>
      </body>
    </html>
  );
}