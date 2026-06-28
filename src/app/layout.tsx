import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudharshan Murugan | Data Engineer & Frontend Developer",
  description:
    "Data Engineer at TCS working on Liberty Mutual Insurance. Expert in Python, SQL, ETL, and cloud data solutions. Gold Medalist & M.Sc CS from SRM.",
  keywords: [
    "Data Engineer",
    "TCS",
    "Python",
    "SQL",
    "ETL",
    "Sudharshan Murugan",
    "Chennai",
    "Frontend Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Sudharshan Murugan" }],
  openGraph: {
    title: "Sudharshan Murugan | Data Engineer",
    description: "Building scalable data pipelines and transforming raw data into business intelligence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
