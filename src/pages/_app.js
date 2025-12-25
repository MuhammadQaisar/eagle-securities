import "@/styles/globals.css";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import Topbar from "../../components/ui/Topbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
