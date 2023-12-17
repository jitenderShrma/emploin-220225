import { Navbar, Container } from 'react-bootstrap';


const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Employee List</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default MyNavbar;