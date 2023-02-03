import "./App.css";
import ProductsList from "./Components/ProductsList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <ProductsList />
    </div>
  );
};

export default App;
