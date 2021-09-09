import "./App.css";
import Search from "./common/Search";
import Filter from "./component/Filter";
import NavBar from "./component/NavBar";
import ProductList from "./component/ProductList";
import ProductProvider from "./stateManager/ProductProvider";

function App() {
  return (
    <div className="app">
      <ProductProvider>
        <NavBar />
        <Search />
        <Filter />
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
