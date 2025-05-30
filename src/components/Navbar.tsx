import  { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'


export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart()

 return (
  <NavbarBS sticky="top" className="bg-white shadow-sm mb-3"> 
    <Container> 
        <Nav className='me-auto'>
            <Nav.Link to="/" as={NavLink}>  
                Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>  
                Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>  
                About
            </Nav.Link>
        </Nav>
        <Button variant='outline-primary' 
            onClick={openCart}
            className='rounded d-flex justify-content-center align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ms-2' style={{color: 'white', width: '1.5rem', height: '1.5rem', }}>
                    {cartQuantity}
                </div>
        </Button>
    </Container>
  </NavbarBS>
    )
}