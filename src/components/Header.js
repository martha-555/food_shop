/** @format */

/** @format */

import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../useAuth";
import Text from "./ui/Text";

export default function Header() {
  const isAuth = useAuth();
  return (
    <div className="nav-fix">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#cabfbf"
        variant="dark"
        className="nav-list"
      >
        <Container>
          <Navbar href="#">
            {" "}
            <Text>Смажена русня </Text>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavDropdown title="Меню" id="collasible-nav-dropdown">
              <NavLink className="nav-link" to="/pizza">
                Піца
              </NavLink>

              <NavLink className="nav-link" to="/sushi">
                Суші та роли
              </NavLink>

              <NavLink className="nav-link" to="/burger">
                Бургери
              </NavLink>
            </NavDropdown>
            <Nav className="me-auto">
              <Nav>
                <NavLink className="nav-link" to="/about">
                  Про нас
                </NavLink>
              </Nav>

              <Nav>
                <NavLink className="nav-link" to="/delivery">
                  Оплата і доставка
                </NavLink>
              </Nav>

              <Nav>
                <NavLink className="nav-link" to="/contacts">
                  Контакти
                </NavLink>
              </Nav>
            </Nav>
            <Nav></Nav>
            <Nav>
              <Nav>
                {isAuth.isAuth ? (
                  <NavLink className="nav-link" to="/my-account">
                    Мій профіль
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/login">
                    Вхід/реєстрація
                  </NavLink>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
// #100903
