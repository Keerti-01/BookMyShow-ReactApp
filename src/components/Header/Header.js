import './Header.css';
import {Navbar , Container , Nav, NavDropdown, Form , FormControl , Button} from 'react-bootstrap'; 

function Header() {
    return (
      <div style={{background:"rgb(51, 53, 69)", color:"white",paddingLeft:"0"}}>
        <Navbar  expand="lg" variant="dark">
        <Container style={{padding:"10px 0 10px 0"}}>
            <Navbar.Brand href="/" style={{paddingLeft:"0"}}><span class="logo">BookMyShow</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/">Home</Nav.Link>
                
                <NavDropdown title="Events" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
                <Button variant="danger" style={{marginLeft:"330px",marginRight:"10px"}} href="/register">Register</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Container fluid style={{background:"rgb(31, 37, 51)",color:"(204, 204, 204)",fontWeight:"400",fontSize:"14px",cursor:"pointer"}}>
            <a href="/movies" style={{textDecoration:"none",color:"white"}}>Movies</a>&nbsp;
            <a>Streams</a>&nbsp;
            <a>Events</a>&nbsp;
            <a>Activities</a>&nbsp;
            <a>Play</a>&nbsp;
            <a>Sports</a>
            
            <a style={{marginLeft:"350px"}}>Corporates</a>&nbsp;
            <a>Offers</a>&nbsp;
            <a>Gift Cards</a>&nbsp;
        </Container>
      </div>
    )
  };
      
  export default Header;