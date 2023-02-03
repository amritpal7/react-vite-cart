import "./App.css";
import ProductsList from "./Components/ProductsList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="root">Shopping Cart</h1>
      <ProductsList />
    </div>
  );
};

export default App;
