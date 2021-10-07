import "./App.css";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";

const WowApp = () => {
  return (
    <>
      <Header />
      <Cards />
      <Portfolio />
      <Footer />
    </>
  );
};

export default WowApp;
