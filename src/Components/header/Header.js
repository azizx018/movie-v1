// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import  Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = ({movies}) => {
    return (
       <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                {/* <FontAwesomeIcon icon ={faVideoSlash}/>Gold */}

            </Navbar.Brand>
            <NavbarToggle aria-controls="navbarScroll"></NavbarToggle>
            <NavbarCollapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/watchlist">Watch List</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info" className="me-2">Registration</Button>
            </NavbarCollapse>

        </Container>

       </Navbar>
    )
}
export default Header;