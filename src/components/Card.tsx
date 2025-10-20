import ErrorFace from "./ErrorFace";
interface CardComponentProps {
  title: string;
  picture?: string;
  price: number;
  key: number;
}
function Card({ title, price }: CardComponentProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-img-top p-3">
        <ErrorFace></ErrorFace>
      </div>
      <div className="card-header">
        <h5
          className="fs-5 text-dark"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text" style={{ fontFamily: "Poppins, sans-serif" }}>
          <b className="fs-4 text-secondary">{price.toLocaleString("ru-RU")}</b>{" "}
          РУБЛЕЙ
        </p>
        <button className="btn btn-warning px-4 rounded-pill">Купить</button>
      </div>
    </div>
  );
}
export default Card;