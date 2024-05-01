const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <h1>Innovate Kit</h1>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="/">Home</a>
                        <a href="/tools">Tools</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;