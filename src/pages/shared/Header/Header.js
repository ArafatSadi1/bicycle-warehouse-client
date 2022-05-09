import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Bicycle-Warehouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/">
              Home
            </CustomLink>
            <CustomLink to="/blogs">
              Blogs
            </CustomLink>
            {user && (
              <CustomLink to="/manage">
                Manage Products
              </CustomLink>
            )}
            {user && (
              <CustomLink to="/addProduct">
                Add Product
              </CustomLink>
            )}
            {user && (
              <CustomLink to={`/myProducts/${user.email}`}>
                My Products
              </CustomLink>
            )}
            {user ? (
              <Button
                onClick={handleLogOut}
                variant="warning"
                className="fw-bold ms-2"
              >
                Log Out
              </Button>
            ) : (
              <CustomLink as={Link} to="/login">
                Login
              </CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
