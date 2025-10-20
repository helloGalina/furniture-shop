import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

interface FurnitureObjectResponse {
  id: number;
  name: string;
  price: number;
  photo: string;
}

export default function ProductList() {
  const [cards, setCards] = useState<FurnitureObjectResponse[]>([]);

  useEffect(() => {
    const getFurnitureObject = async () => {
      try {
        const linkAPI = "https://68e94d94f1eeb3f856e3aa38.mockapi.io/Beds";
        const response = await axios.get(linkAPI);
        console.log("Products fetched:", response.data); // Лог только один раз
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getFurnitureObject();
  }, []);

  return (
    <div className="m-3">
      <h1 className="mt-1 mb-3 text-secondary">Каталог</h1>
      <div className="container d-flex flex-row flex-wrap justify-content-between gap-3">
        {cards.map((data: FurnitureObjectResponse) => (
          <Card key={data.id} title={data.name} price={data.price} />
        ))}
      </div>
    </div>
  );
}