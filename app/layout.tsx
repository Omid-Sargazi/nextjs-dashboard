import "@/app/ui/global.css"
import { inter } from "./ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className=" p-10 bg-blue-600">
          <p>Header</p>
        </header>
        {children}
        <footer className=" p-10 bg-gray-400">
          <p>Footer</p>
        </footer>
        </body>
    </html>
  );
}
