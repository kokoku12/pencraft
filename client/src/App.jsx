// Importing necessary components and pages
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Mocking current user authentication status
  const currentUser = true;
  return (
    // Setting up React Router for navigation
    <Router>
      {/* Render the top navigation bar */}
      <Topbar />
      {/* Defining routes for different pages */}
      <Switch>
        {/* Route for the homepage */}
        <Route exact path="/">
          <Homepage />
        </Route>
        {/* Route for the about page */}
        <Route path="/about"> 
          <About />
        </Route>
        {/* Route for the contact page */}
        <Route path="/contact"> 
          <Contact />
        </Route>
        {/* Route for displaying posts */}
        <Route path="/posts">
          <Homepage />
        </Route>
        {/* Route for user registration, redirects to homepage if already logged in */}
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        {/* Route for user login, redirects to homepage if already logged in */}
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        {/* Route for displaying a single post */}
        <Route path="/post/:id">
          <Single />
        </Route>
        {/* Route for writing a new post, redirects to login if not logged in */}
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        {/* Route for user settings, redirects to login if not logged in */}
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
