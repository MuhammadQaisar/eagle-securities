import "@/styles/globals.css";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
