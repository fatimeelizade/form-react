import { Outlet, Link } from "react-router-dom";
 function Header(){
    return (<>
    <header>
         <ul className="nav">
    <li className="nav-item li-link">
          < Link to="/">Form</Link>
  </li>
  <li className="nav-item li-link">
          < Link to="/students">Students</Link>
  </li>
  <li className="nav-item li-link">
          < Link to="/teachers">Teachers</Link>
  </li>
</ul>
 </header>
 <Outlet />
    </>)
}
export default Header;