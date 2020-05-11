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
      <Navbar.Brand href="/">
        <img src="/logo.png" />
      </Navbar.Brand>
      <button
        className={`${navbar["enter-button-mobile"]} ${navbar["enter-button"]}`}
      >
        Войти
      </button>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/info">Информация</Nav.Link>
          <NavDropdown title="Профиль" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/settings">Настройки</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/exit">Выход</NavDropdown.Item>
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
