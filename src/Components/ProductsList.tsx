import { useState, useEffect } from "react";
import { ProductModel } from "../Model";
import Product from "./Product";

const PROD_ENDPOINT = "https://fakestoreapi.com/products";

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch(PROD_ENDPOINT)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
