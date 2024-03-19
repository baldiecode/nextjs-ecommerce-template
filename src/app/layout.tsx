import { Concert_One } from "next/font/google";
import "../styles/globals.css";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";



const concert = Concert_One({
  weight: ["400"],
  subsets: ["latin"]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={concert.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  );
}
