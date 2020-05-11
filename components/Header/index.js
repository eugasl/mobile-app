import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import navbar from "./navbar.module.css";

const Header = () => (
  <>
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="nav-bar"
      variant="light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Link href="/">
        <Navbar.Brand href="/">
          <img src="/logo.png" />
        </Navbar.Brand>
      </Link>
      <button
        className={`${navbar["enter-button-mobile"]} ${navbar["enter-button"]}`}
      >
        Войти
      </button>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link href="/info">
            <Nav.Link href="/info">Информация</Nav.Link>
          </Link>
          <NavDropdown title="Профиль" id="collasible-nav-dropdown">
            <Link href="/settings">
              <NavDropdown.Item href="/settings">Настройки</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <Link href="/logout">
              <NavDropdown.Item href="/logout">Выход</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <button
        className={`${navbar["enter-button-desktop"]} ${navbar["enter-button"]}`}
      >
        Войти
      </button>
    </Navbar>
  </>
);

export default Header;
