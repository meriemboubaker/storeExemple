import logo from "./logo.svg";
import "./App.css";
import Product from "./screens/Product";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";
import { useEffect, useState } from "react";
function App() {
  console.log(data);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [table, setTable] = useState(data);

  const searchFunction = () => {
    setTable(data.filter((elm) => elm?.productName.toLowerCase() === search2.toLowerCase()));
  };
  useEffect(() => {
    setTable(data.filter((elm) => elm?.productName.toLowerCase().includes(search.toLowerCase())));
  }, [search]);
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" , display:"flex", justifyContent:"space-evenly" }}
              navbarScroll
            >
             
                <Link to="/" style={{textDecoration:"none",marginRight:"20px",color:"white",fontWeight:"500"}}>Home</Link>
            
                <Link to="/about" style={{textDecoration:"none",marginRight:"20px",color:"white",fontWeight:"500"}}>About</Link>
              
                <Link to="/contact" style={{textDecoration:"none",marginRight:"20px",color:"white",fontWeight:"500"}}>Contact</Link>
          
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search 1"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Form>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search 2 using search button"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch2(e.target.value);
                }}
              />
              <Button variant="outline-success" onClick={searchFunction}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route index element={<Home data={table} />} />
        {/*sending data array using props to home compnent*/}
        <Route path="product/:id" element={<Product data={data} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
