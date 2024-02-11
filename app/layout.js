import Head from 'next/head';
import Header from '../components/Header';
import Footer from "@/components/Footer";

export const metadata = {
  title: "GDP.MAN.DBS",
  description: "Server for Game Developemnt Programmming activties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
