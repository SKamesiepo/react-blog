import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shaun's React Blog Application</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blogpost</Link>
      </div>
    </nav>
  );
}

export default Navbar;