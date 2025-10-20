import Header from "./components/Header.tsx";
import Banner from "./components/Banner.tsx";
import Carousel from "./components/Carousel.tsx";
import About from "./components/About.tsx";
import ProductList from "./components/ProductList.tsx";
import Footer from "./components/Footer.tsx";
import ScrollTopButton from "./components/ScrollTopButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <main className="d-flex flex-column align-items-center">
        <Banner />
        <About />
        <Carousel />
        <section id="catalog" className="w-100">
          <ProductList />
        </section>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}