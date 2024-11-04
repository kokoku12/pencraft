// Importing necessary modules and components
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css"; // Importing styles for the Homepage component

// Define the Homepage component
export default function Homepage() {
  const location = useLocation(); // Get the current location
  console.log(location); // Log the current location to the console
  return (
    <>
      {/* Header component */}
      <Header />
      {/* Main container for the Homepage component */}
      <div className="home">
        {/* Posts component */}
        <Posts />
        {/* Sidebar component */}
        <Sidebar />
      </div>
    </>
  );
}
