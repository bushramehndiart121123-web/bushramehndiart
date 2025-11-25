import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { WHATSAPP_NUMBER, EMAIL, INSTAGRAM_LINK, YOUTUBE_LINK, CALLING_NUMBER, ADDRESS ,urlWhatsapp} from "../constant";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Logo & Brand */}
        <div className="footer-brand">
          <h2>
            <span className="gold">Bushra</span> Mehendi Art
          </h2>
          <p>Luxury Mehendi Services Since 2015</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4 className="gold">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li> {/* Updated */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4 className="gold">Contact Us</h4>
          <p><FaPhoneAlt /> {CALLING_NUMBER}</p>
          <p><FaEnvelope /> {EMAIL}</p>
          <p><FaWhatsapp /> {WHATSAPP_NUMBER}</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4 className="gold">Follow Us</h4>
          <div className="social-icons">
            <a href={INSTAGRAM_LINK}><FaInstagram /></a>
           
            <a href={urlWhatsapp}><FaWhatsapp /></a>
            <a href={`mailto:${EMAIL}`}><FaEnvelope /></a>

          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bushra Mehendi Art. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
