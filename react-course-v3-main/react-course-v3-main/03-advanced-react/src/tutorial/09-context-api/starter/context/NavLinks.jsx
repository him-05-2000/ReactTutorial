import UserContainer from "./UserContainer";
const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer></UserContainer>
    </div>
  );
};
export default NavLinks;
