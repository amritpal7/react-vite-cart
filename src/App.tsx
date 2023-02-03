import "./App.css";
import ProductsList from "./Components/ProductsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <div className="flex justify-between leading-7 text-white text-2xl font-bold fixed top-0 left-0 right-0 z-100 bg-gray-900 p-4 z-50">
        <h2 className="sm:truncate sm:text-3xl sm:tracking-tight">
          Shopping Cart
        </h2>
        <span className="icon-with-badge">
          <FontAwesomeIcon className="text-white" icon={faShoppingCart} />
          {cartCount}
        </span>
      </div>
      <ProductsList addProducts={handleAddToCart} />
    </div>
  );
};

export default App;
