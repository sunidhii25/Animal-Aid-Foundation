import React from "react";
import FooterComponent from "../Header/FooterComponent";
import Header from "../Header/Header";

const Aboutwe = () => {
  return (
    <div style={{minHeight: "100vh"}}>
      <Header />
      <div
        style={{
          backgroundImage: "url(./images/background.jpg)",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingLeft: "60px",
          paddingRight: "60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#61892F",
            fontSize: "44px",
            fontWeight: 700,
            paddingTop: "15px",
          }}
        >
          WHAT ARE WE?
        </h1>
        <p
          style={{
            color: "white",
            padding: "0px 20px 20px 0px",
            textAlign: "center",
            fontSize: "28px",
            lineHeight: "40px",
            fontWeight: "400",
          }}
        >
          We have come together to serve the neglected,create a nation, where
          each and every stray animal receives all the basic treatment facility.
          Our NGO works for the well-being of animals, be it anykind. Our team
          not only aims to serve the animals, but also, to bring people together
          and aware them about the fact that other lives coexist with us, and
          most importantly, We don’t own this planet, we share this planet with
          the lives around us be it any kind. We provide free-of-charge
          veterinary services 7×24 in Hisar and nearby Hisar.
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "450px",
              width: "500px",
              border: "4px solid #86C232",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
              marginBottom: "50px",
              padding: "5px"
            }}
          >
            <h2 style={{color: "#61892F", fontWeight: "700", fontSize: "40px"}}>VISION</h2>
            <p style={{textAlign: "center", fontWeight: "400"}}>
              Sensitise people about pet adoptions and discourage them to
              purchase a ‘life’.
            </p>
            <p style={{textAlign: "center", fontWeight: "400"}}>
              Make people aware about animal exploitation by various brands.
            </p>
            <p style={{textAlign: "center", fontWeight: "400"}}>
              Encourage citizens to abide by the fundamental duty of “to protect
              and improve natural environment….the forests and wildlife”, laid
              down in Part IV-A of the Constitution.
            </p>
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "450px",
              width: "500px",
              border: "4px solid #86C232",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
              marginBottom: "50px",
              padding: "5px"
            }}
          >
            <h2 style={{color: "#61892F", fontWeight: "700", fontSize: "40px"}}>MISSION</h2>
            <p style={{textAlign: "center", fontWeight: "400"}}>
            "Create a nation, where each and every stray animal receives all the basic treatment facility."
            </p>
            <p style={{textAlign: "center", fontWeight: "400"}}>
            Provide prompt assistance in handling animal related emergencies.
            </p>
            <p style={{textAlign: "center", fontWeight: "400"}}>
            Reduce animal deaths caused by ill treatment and road accidents
            </p>
            <p style={{textAlign: "center", fontWeight: "400"}}>
            Provide free-of-charge veterinary services 7×24 in Hisar and nearby Hisar
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Aboutwe;
