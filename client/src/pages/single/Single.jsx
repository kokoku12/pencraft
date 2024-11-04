// Importing necessary components and styles
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";


// Define the Single component
export default function Single() {
  return (
    // Main container for the Single component
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
