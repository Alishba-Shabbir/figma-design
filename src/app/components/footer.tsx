// components/Footer.js
import React from "react";
import Image from "next/image";
import Footerlogo from "@/public/Footerlogo.png"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
      <div className="footer-image">

< Image
src={Footerlogo}
alt="logo"
height={94}
width={145}
/>
</div>
        <div className="infoSection">
          <h3 className="heading">Information</h3>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="contactSection">
          <h3 className="heading">Contact</h3>
          <div className="contactInfo">
            <FaMapMarkerAlt className="icon" />
            <p>1234 Sample Street
            Austin Texas 78704</p>
          </div>
          <div className="contactInfo">
            <FaPhoneAlt className="icon" />
            <p>512.333.2222</p>
          </div>
          <div className="contactInfo">
            <FaEnvelope className="icon" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>

        <div className="socialSection">
          <h3 className="heading">Social Media</h3>
          <div className="socialLinks">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
