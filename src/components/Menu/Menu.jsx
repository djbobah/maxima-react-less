import { Link, NavLink } from "react-router-dom";

import "./menu.css";

export default () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
    </nav>
  );
};
