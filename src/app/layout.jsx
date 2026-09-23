import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata = {
  title: "Shahariyar Ahad",
  description: "Shahariyar Ahad Personal Profile",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <header>
          <Navbar />
        </header>

        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-159px)]">
          {children}
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        

      </body>
    </html>
  );
}
