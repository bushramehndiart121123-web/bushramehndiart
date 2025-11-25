import React from "react";
import "./Contact.css";
import { WHATSAPP_NUMBER, EMAIL,YOUTUBE_LINK, ADDRESS, INSTAGRAM_LINK,CALLING_NUMBER, WHATSAPP_MESSAGE,GOOGLE_MAP_LINK} from "../constant";
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
const whatsappText = encodeURIComponent(
  "Hello, we are reaching out via your website to discuss your requirements and explore how we can assist you. Looking forward to your response."
);
const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;



   
    const urlWhatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  



    
   


  return (
    <div className="contact-container">

      {/* Top Divider */}
      <div className="contact-divider"></div>

      {/* Heading */}
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">We're always here to assist you</p>

      <div className="contact-wrapper">

        {/* LEFT SIDE — Contact Info */}
        <div className="contact-info">

          <h3 className="section-heading">Reach Us</h3>

         <p className="info-item"><FaMapMarkerAlt /> Address: {ADDRESS}</p>
<p className="info-item"><FaPhone /> Mobile: {CALLING_NUMBER}</p>
<p className="info-item"><FaEnvelope /> Email: {EMAIL}</p>

          <div className="social-icons">
    <a href={INSTAGRAM_LINK} className="social-icon"><FaInstagram /> Instagram</a>
  <a href={urlWhatsapp} className="social-icon" target="_blank"><FaWhatsapp /> WhatsApp</a>
  <a href={YOUTUBE_LINK} className="social-icon"><FaYoutube /> YouTube</a>
          </div>

          <h3 className="section-heading mt-10">Find Us on Map</h3>

          <div className="map-box">
            <iframe
              className="map-iframe"
              src={GOOGLE_MAP_LINK}
              allowFullScreen=""     
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>





            
          </div>

        </div>

        {/* RIGHT SIDE — Feedback Form */}
        <div className="contact-form">

          <h3 className="section-heading">Send Us a Message</h3>

          <form className="form-box">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Mobile Number</label>
            <input type="text" placeholder="Enter mobile number" required />

            <label>Your Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

        </div>

      </div>

      {/* Bottom Divider */}
      <div className="contact-divider bottom-divider"></div>
    </div>
  );
}
