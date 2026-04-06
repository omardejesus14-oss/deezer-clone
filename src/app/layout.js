import { Inter } from "next/font/google";
import "./globals.css";

// Configuramos Inter con los pesos que necesitamos
const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"], // El 900 es el secreto del título
  variable: "--font-inter",      // Creamos una variable CSS
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}