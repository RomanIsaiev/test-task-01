import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/shoppingcart">Shopping Cart</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<div>Shop</div>} />
          <Route path="/shoppingcart" element={<div>Shopping Cart</div>} />
        </Routes>
      </div>
    </>
  );
};
