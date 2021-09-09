import "./App.css";
import NavBar from "./component/NavBar";
import ProductList from "./component/ProductList";
import ProductProvider from "./stateManager/ProductProvider";

function App() {
  return (
    <div className="app">
      <ProductProvider>
        <NavBar />
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
