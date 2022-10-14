import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
             Search Todo
        </label>
        <input
            id="search"
            type="text"
            placeholder="search post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
      </form>
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
