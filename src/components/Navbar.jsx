import { Link } from "react-router"
import styled from "styled-components"

// styled component
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;

`

const BrandItem = styled.div`
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`

const NavItem = styled.li`
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <BrandItem>
      <Link to="/">Jo Ern</Link>
    </BrandItem>
    <NavList>
      <NavItem>
        <Link to="/experiences">Experiences</Link>
      </NavItem>
      <NavItem>
        <Link to="/projects">Projects</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </NavList>
  </NavbarContainer>
);

export default Navbar;
