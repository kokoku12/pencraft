import React from 'react';
import "./about.css"; // Importing styles for the About component

// Define the About component
export default function About() {
  return (
    // Main container for the About component
    <div className="about">
      <div className="aboutWrapper">
        {/* Header section */}
        <div className="aboutHeader">
          <h2>About Us</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VkrAqL1DC_A6LYkYiSGWJsIA1hNIHngsLukQL5WXlg&s" alt="About Us" className="aboutImage" />
        </div>
        {/* Description section */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vitae justo nec quam fermentum lobortis. In hac habitasse platea
          dictumst. Nulla facilisi. Aenean congue, eros id hendrerit
          consequat, nisl lectus condimentum mi, et vehicula felis leo at
          odio. Nullam quis tellus urna. Ut at massa ut purus feugiat
          elementum. Integer mattis rutrum aliquet. Donec nec nulla nec
          nisl aliquet dictum. Ut vitae velit nec nunc scelerisque
          sollicitudin. Cras dignissim scelerisque ligula, non iaculis nisi
          ultrices et. Nulla facilisi. Phasellus ac volutpat ex. In nec
          magna at magna laoreet hendrerit ac a justo.
        </p>
        {/* Mission section */}
        <h3>Our Mission</h3>
        <p>
          Donec sit amet ex eros. Sed imperdiet, felis a dapibus
          sollicitudin, mauris velit commodo velit, eget scelerisque lacus
          neque id nulla. Ut at tempor enim. Nullam accumsan sodales augue,
          sit amet vestibulum turpis. Sed id purus et nisi aliquet
          condimentum. Sed vitae suscipit nunc. Nullam mattis auctor
          suscipit. Ut vehicula purus at libero fermentum, sed interdum
          tortor vehicula. Sed fermentum auctor ipsum, a laoreet nibh
          finibus vitae. In lobortis sapien nec pharetra gravida. Integer
          nec erat eu erat aliquet cursus. Cras consequat velit eu
          fermentum molestie. Integer non mauris orci. Nullam id nulla
          vitae purus volutpat sollicitudin. Nam nec velit sed metus
          placerat vestibulum. Cras lobortis varius metus, vel consequat
          nibh pulvinar vel.
        </p>
      </div>
    </div>
  );
}
