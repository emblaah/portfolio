import "@/styles/globals.css";
import { PortfolioProvider } from "../context/PortfolioContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PortfolioProvider>
  );
}
