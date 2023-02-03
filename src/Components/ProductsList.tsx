import { useState, useEffect } from "react";
import { ProductModel } from "../Model";
import Product from "./Product";

const PROD_ENDPOINT = "https://fakestoreapi.com/products";

interface ProductsListProps {
  addProducts: () => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ addProducts }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch(PROD_ENDPOINT)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div className="container mx-auto bg-white z-0">
      <div className="max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              addProducts={addProducts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
