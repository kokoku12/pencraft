import { Link } from "react-router-dom";
import "./topbar.css";

// Component for the top navigation bar
export default function Topbar() {
  const user = true; // Placeholder user variable
  return (
    <div className="top">
      <div className="topLeft">
        {/* Social media icons */}
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        {/* Navigation links */}
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {/* Conditional rendering for user logout */}
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {/* Conditional rendering for user authentication */}
        {user ? (
          // Render user profile link if user is authenticated
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg"
              alt=""
            />
          </Link>
        ) : (
          // Render login and register links if user is not authenticated
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* Search icon */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
