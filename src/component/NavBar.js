import { useProduct } from "../stateManager/ProductProvider";

const NavBar = () => {
  const product = useProduct();
  return (
    <div className="navBar">
      navBar
      <span>{product.length}</span>
    </div>
  );
};

export default NavBar;
