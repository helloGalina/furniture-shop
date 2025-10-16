import ErrorFace from "./ErrorFace";
// import ProductList from "./ProductList";

interface CardComponentProps {
  title: string;
  picture?: string;
  price: number;
  key: number;
}

function Card({ title, price }: CardComponentProps) {
  return (
    <div className="card" style={{ width: "400px" }}>
      <div className="card-img-top p-3">
        <ErrorFace></ErrorFace>
      </div>

      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-header">
        <h5 className="fs-1 text-dark">{title}</h5>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <div className="m-1">
          <p className="card-text">
            <b className="fs-3 text-secondary">
              {price.toLocaleString("ru-RU")}
            </b>{" "}
            РУБЛЕЙ
          </p>
          <button className="btn btn-warning px-4 rounded-pill">Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
