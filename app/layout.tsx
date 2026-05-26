import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamison Kimminau — Portfolio",
  description:
    "Personal site and portfolio — a showcase of motion design and frontend craft.",
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
