import pic01 from "../assets/pic01.png";
import pic02 from "../assets/pic02.png";
import pic03 from "../assets/pic03.png";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide w-50 my-4 mx-auto">
      <div className="carousel-inner rounded-4 shadow-sm">
        <div className="carousel-item active">
          <img src={pic01} className="d-block w-100" alt="Детская кровать" />
        </div>
        <div className="carousel-item">
          <img src={pic02} className="d-block w-100" alt="Детская комната" />
        </div>
        <div className="carousel-item">
          <img src={pic03} className="d-block w-100" alt="Игровой уголок" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Назад</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Вперёд</span>
      </button>
    </div>
  );
}