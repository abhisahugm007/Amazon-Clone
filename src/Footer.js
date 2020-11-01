import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Amazon Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on fake Amazon</li>
            <li>Sell under fake Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="Footer__Line-message">Abhishek_Sahu &copy; </span>
      </div>
    </div>
  );
}

export default Footer;
