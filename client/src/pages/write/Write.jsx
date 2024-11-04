// Importing the CSS file for styling
import "./write.css";

// Define the Write component
export default function Write() {
  return (
    // Main container for the Write component
    <div className="write">
      {/* Image container */}
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_640.jpg"
        alt=""
      />
      {/* Form for writing */}
      <form className="writeForm">
        {/* Input for uploading files */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          {/* Input field for title */}
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        {/* Text area for writing the content */}
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        {/* Button to submit the content */}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
