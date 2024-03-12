import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMDB movie app",
  description: "Generated using the IMDB api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
