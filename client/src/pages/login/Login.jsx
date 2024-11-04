// Importing necessary styles
import "./login.css";

// Define the Login component
export default function Login() {
  return (
    // Main container for the Login component
    <div className="login">
      {/* Title for the login form */}
      <span className="loginTitle">Login</span>
      {/* Form for user login */}
      <form className="loginForm">
        <label>Email</label>
        {/* Input field for email */}
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        {/* Input field for password */}
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        {/* Button to submit login */}
        <button className="loginButton">Login</button>
      </form>
      {/* Button to navigate to registration page */}
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
