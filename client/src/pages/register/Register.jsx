// Importing necessary styles
import "./register.css";

// Define the Register component
export default function Register() {
  return (
    // Main container for the Register component
    <div className="register">
      {/* Title for the registration form */}
      <span className="registerTitle">Register</span>
      {/* Form for user registration */}
      <form className="registerForm">
        <label>Username</label>
        {/* Input field for username */}
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        {/* Input field for email */}
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        {/* Input field for password */}
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        {/* Button to submit registration */}
        <button className="registerButton">Register</button>
      </form>
      {/* Button to navigate to login page */}
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
