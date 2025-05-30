import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export function Home() {
    return (
        <div>
        <h1>Home</h1>
        <p>This page is only here to demo rooting.
            You can go to the store page to see the application.
        </p>
        <p>This project was made by <a href="https://jeremie.roberrini.com/">Jeremie Roberrini</a>
        </p>
        <Link to="/store">
            <Button variant='outline-primary' >Store</Button>
        </Link>
        
        </div>
    )
}