import { ProductModel } from "../Model";

interface ProductItemProps {
  product: ProductModel;
}

const Product: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={product.image} alt="product image" className="" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
