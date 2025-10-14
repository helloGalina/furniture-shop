import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

interface FurnitureObjectResponce {
  id: number;
  name: string;
  price: number;
  photo: string;
}

export default function ProductList() {
  const [cards, changeCards] = useState([]);

  function getFurnitureObject() {
    let linkAPI: string = "https://68e94d94f1eeb3f856e3aa38.mockapi.io/Beds";
    axios.get(linkAPI).then((response) => {
        console.log(response);
        changeCards(response.data);
    });
  }

  useEffect(() => {
    getFurnitureObject();
  }, []);

  return (
    <div className="m-3">
      <h1 className="mt-1 mb-3 text-secondary">Каталог</h1>
      <div className="container d-flex flex-row flex-wrap justify-content-between gap-3">
{
    cards.map((data: FurnitureObjectResponce) => {
        return <Card key={data.id} title={data.name} price={data.price}></Card>
    })
}
      </div>
    </div>
  );
}
