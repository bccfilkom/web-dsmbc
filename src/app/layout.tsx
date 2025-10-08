import { ClientProvider } from '@/shared/providers';
import "./globals.css";
import BackgroundDecorations from "@/shared/components/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <BackgroundDecorations />
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}