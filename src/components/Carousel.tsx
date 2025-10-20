import pic01 from "../assets/pic01.jpeg";
import pic02 from "../assets/pic02.jpeg";
import pic03 from "../assets/pic03.jpeg";
import pic04 from "../assets/pic04.jpeg";
import pic001 from "../assets/pic001.jpg";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide w-75 my-4 mx-auto">
      <div className="carousel-inner rounded-4 shadow-sm">
        <div className="carousel-item active">
          <img src={pic001} className="d-block w-100" alt="Игровой уголок" />
        </div>
        <div className="carousel-item">
          <img src={pic01} className="d-block w-100" alt="Детская кровать" />
        </div>
        <div className="carousel-item">
          <img src={pic02} className="d-block w-100" alt="Детская комната" />
        </div>
        <div className="carousel-item">
          <img src={pic03} className="d-block w-100" alt="Игровой уголок" />
        </div>
        <div className="carousel-item">
          <img src={pic04} className="d-block w-100" alt="Игровой уголок" />
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
        <span className="visually-hidden">Вперед</span>
      </button>
    </div>
  );
}
