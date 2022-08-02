import React from "react";
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

const FooterComponent = () => {
  return (
    <div
    id="footerComponent"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white !important",
        width: "100vw",
        paddingTop: "50px",
        paddingBottom: "10px",
        backgroundColor: "#222629"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <h2 style={{color: "#82C232", fontWeight: "600"}}>Reach Us</h2>
          <p style={{color: "white", fontWeight: "400"}}>Address: Shop No. 1D, Vishal Nagar, Raipur Road, Hisar</p>
          <p style={{color: "white", fontWeight: "400"}}>Call Us: 8059450061, 9468248050</p>
          <p style={{color: "white", fontWeight: "400"}}>Mail Us: animalaids36@gmail.com</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "50%", alignItems: "center",}}>
            <h2 style={{color: "#82C232", fontWeight: "600"}}>
            Animal Aid Foundation Trust
            </h2>
            <p style={{color: "white", fontWeight: "400"}}>'AAFT' is goverment registered NGO with Regd. No:10383</p>
            <div style={{display: "flex", justifyContent: "space-between", width: "20%", marginTop: "20px"}}>
            <a href="https://www.facebook.com/Animal-Aids-Hisar-101943705274060/"><FaFacebookSquare style={{color: "lightblue"}} /></a>
            <a href="#"><FaInstagram style={{color: "pink"}} /></a>
            <a href="whatsapp://send?text=The%20text%20to%20share!"><FaWhatsapp style={{color: "#82C232"}} /></a>
            </div>
        </div>
      </div>
      <div style={{color: "#82C232", paddingTop: "20px", fontSize: "22px"}}>
        © 2020 Copyright: Animal Aid Foundation Trust
      </div>
    </div>
  );
};

export default FooterComponent;
