import "./globals.css";

export const metadata = {
  title: "Domus Koco",
  description: "RK Domus Koco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="md:text-lg">{children}</body>
    </html>
  );
}