import "./header.css"; // Importing styles for Header component

// Component for rendering the header
export default function Header() {
  return (
    <div className="header"> {/* Container for the header */}
      <div className="headerTitles"> {/* Header titles */}
        <span className="headerTitleSm">Made with React & Node</span> {/* Small header title */}
        <span className="headerTitleLg">Pencraft</span> {/* Large header title */}
      </div>
      <img
        className="headerImg"
        src="https://s3.envato.com/files/342111380/DSC_3020.jpg"
        alt=""
      /> {/* Header image */}
    </div>
  );
}
