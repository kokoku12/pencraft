// Importing necessary styles and components
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

// Define the Settings component
export default function Settings() {
  return (
    // Main container for the Settings component
    <div className="settings">
      {/* Wrapper for the settings content */}
      <div className="settingsWrapper">
        {/* Title section for update and delete options */}
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        {/* Form for updating account information */}
        <form className="settingsForm">
          <label>Profile Picture</label>
          {/* Profile picture section */}
          <div className="settingsPP">
            {/* Displaying current profile picture */}
            <img
              src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg"
              alt=""
            />
            {/* Input for updating profile picture */}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            {/* Hidden file input for selecting profile picture */}
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          {/* Input field for updating username */}
          <input type="text" placeholder="Richneil" name="name" />
          <label>Email</label>
          {/* Input field for updating email */}
          <input type="email" placeholder="Richneil@gmail.com" name="email" />
          <label>Password</label>
          {/* Input field for updating password */}
          <input type="password" placeholder="Password" name="password" />
          {/* Button to submit updates */}
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      {/* Sidebar component */}
      <Sidebar />
    </div>
  );
}
