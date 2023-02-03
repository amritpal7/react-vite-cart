import { useState, useEffect } from "react";
import Product from "./Product";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: object;
}

const PROD_ENDPOINT = "https://fakestoreapi.com/products";

const ProductsList = () => {
  const [initialState, setInitialState] = useState<Product[]>([]);

  useEffect(() => {
    fetch(PROD_ENDPOINT)
      .then(res => res.json())
      .then(data => setInitialState(data));
  }, []);
  console.log(initialState);
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductsList;
