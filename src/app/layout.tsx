import "./globals.css";

export const metadata = {
  title: "Matúš Kočik",
  description: "Personal web of Matúš Kočik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
