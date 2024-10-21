import type { Metadata } from "next";
import "./public/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-50 bg-neutral-700">
        {children}
      </body>
    </html>
  );
}
