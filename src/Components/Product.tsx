import { ProductModel } from "../Model";

interface ProductItemProps {
  product: ProductModel;
  addProducts: () => void;
}

const Product: React.FC<ProductItemProps> = ({ product, addProducts }) => {
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
      <span className="fa">
        <button
          onClick={addProducts}
          type="button"
          className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          ADD TO CART
        </button>
      </span>
    </div>
  );
};

export default Product;
