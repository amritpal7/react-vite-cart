import { ProductModel } from "../Model";

interface ProductItemProps {
  product: ProductModel;
}

const Product: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};

export default Product;
