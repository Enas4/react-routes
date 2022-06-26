import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/user/enas">User</NavLink>
      <NavLink to="/service">Service</NavLink>
    </div>
  );
}

export default Menu;
