import banner from "../assets/banner-kids-cubs.jpg";

export default function Banner() {
  return (
    <section className="banner w-100">
      {" "}
      <img
        src={banner}
        alt="Баннер магазина Маленький мир"
        className="banner-img"
      />{" "}
    </section>
  );
}
