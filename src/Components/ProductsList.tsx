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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
