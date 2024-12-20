import "./Navbar.css";
function NavBar({counter}) {
  return (
    <div className="navBarContainer">
      <ul className="navbar">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
        <li>Busket {(counter)}</li>
      </ul>
    </div>
  );
}
export default NavBar;
