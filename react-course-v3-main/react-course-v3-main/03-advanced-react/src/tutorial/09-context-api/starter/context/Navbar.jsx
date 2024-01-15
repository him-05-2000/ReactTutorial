import NavLinks from "./NavLinks";
import { useState, createContext } from "react";

export const NavbarContext = createContext();

// console.log(NavbarContext.Provider);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  // using navbarContext.Provider i can pass down the props to any of its child component
  //without prop drilling it
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
