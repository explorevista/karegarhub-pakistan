import "./globals.css";

export const metadata = {
  title: "KarigarHub Pakistan",
  description: "Pakistan’s #1 Smart Home Services Platform",
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
