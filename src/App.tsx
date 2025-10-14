import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Carousel from "./components/Carousel.tsx";
import ProductList from "./components/ProductList.tsx";
import About from "./components/About.tsx";

export default function App() {
  return (
    <div className="semantic">
      <Header />
      <main className="d-flex flex-column align-items-center">
        <Carousel />
        <section id="catalog" className="w-100">
          <ProductList />
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}