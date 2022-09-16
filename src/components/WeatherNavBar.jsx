import { Navbar,Nav,Container } from "react-bootstrap"

const WeatherNavBar = () => {

    return(    
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Wether On Your City</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}


export default WeatherNavBar;