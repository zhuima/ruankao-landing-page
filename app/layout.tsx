import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "软考通关宝典",
  description: "马英老师讲软考",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
