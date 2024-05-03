import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Link to="/blogs">
                    <h1>Innovate Kit</h1>
                </Link>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/tools">Tools</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;