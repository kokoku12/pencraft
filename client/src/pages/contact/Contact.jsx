import React from 'react';
import './contact.css'; // Importing styles for the ContactPage component

// Define the ContactPage component
const ContactPage = () => {
    // Array containing contact details
    const contactDetails = [
        { label: "Email Address", value: "contact@example.com", icon: "https://bankofindia.uk.com/documents/44660/0/contact+Us.jpg/8f1f5bd2-1fdf-8122-6ef5-199b681fc518?t=1663221283337" },
        { label: "Phone Number", value: "+1234567890", icon: "https://bankofindia.uk.com/documents/44660/0/contact+Us.jpg/8f1f5bd2-1fdf-8122-6ef5-199b681fc518?t=1663221283337" },
        { label: "Address", value: "123 Street Name, City, Country", icon: "https://bankofindia.uk.com/documents/44660/0/contact+Us.jpg/8f1f5bd2-1fdf-8122-6ef5-199b681fc518?t=1663221283337" },
    ];

    return (
        // Main container for the ContactPage component
        <div className="contact-page">
            <h1>Contact Us</h1>
            {/* Mapping through contact details array */}
            {contactDetails.map(({ label, value, icon }, index) => (
                // Each contact detail
                <div key={index} className="contact-detail">
                    {icon && <img src={icon} alt="" className="contact-icon" />} {/* Displaying icon if available */}
                    <div className="contact-info">
                        <div className="label">{label}</div>
                        <div className="value">{value}</div>
                    </div>
                </div>
            ))}
            {/* Contact form */}
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    {/* Name input */}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    {/* Email input */}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    {/* Message input */}
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit">Send</button> {/* Submit button */}
                </form>
            </div>
            {/* Social media links */}
            <div className="social-media">
                <h2>Connect With Us</h2>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </div>
            {/* Office address */}
            <div className="office-address">
                <h2>Office Address</h2>
                <p>123 Street Name, City, Country</p>
            </div>
        </div>
    );
}

export default ContactPage;
