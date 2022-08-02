import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import axios from "axios";
import UserHeader from "../Header/UserHeader";
import FooterComponent from "../Header/FooterComponent";
import SignandDonate from "../Dashboard/SignandDonate/SignandDonate";
import CarouselContainer from "../Header/Carousel";
const API = axios.create({ baseURL: "http://localhost:3000" });
//var data = {};
function UsersHomepage() {
  const [data, setData] = useState([]);

  const handleSubmitClick = async(id)=>{
    console.log(id);
    let mobile = localStorage.getItem("mobile");
    const data = {
      campaignId : id,
      mobile:mobile
    }
    const response = await API.post("/user/signUpForCampaign",data);
    console.log(response.data)
  }
  const getCampaigns = async () => {
    
    const response = await API.get("campaign/getCampaigns");
    //console.log(response.data.data);
    const d = response.data.data;
    console.log(d, "tanuja");
    setData(d);
    //console.log(data);
  };
  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div style={{ backgroundImage:
          "url(./images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
          backgroundSize: "cover"}}>
      <UserHeader/>
      <div className="campaign" style={{marginBottom: '100px'}}>
        {data && data.length > 0 ? (
          data.map((campaign) => (
            <Card style={{ width: "25rem", marginTop: "30px", backgroundColor: "#222629", marginBottom: '20px', borderRadius: '10px' }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title style={{color: '#61892f', fontSize:'32px',  marginBottom: '25px'}}>{campaign.title}</Card.Title>
                <Card.Text style={{color: '#fff', fontSize:'18px', fontWeight:'400'}}>{campaign.desc}</Card.Text>
                <Card.Text style={{color: '#fff', fontSize:'18px', fontWeight:'400',color: '#f76c6c'}}>{campaign.type}</Card.Text>
                <Card.Text style={{color: '#fff', fontSize:'18px',fontWeight:'400', color: '#618925'}}>{campaign.status}</Card.Text>
                <Card.Text style={{color: '#fff', fontSize:'18px', fontWeight:'400'}}>{campaign.createdAt}</Card.Text>
                <Card.Text style={{color: '#618925', fontSize:'18px', fontWeight:'400'}}>
                  {campaign.noOfSignatures}/{campaign.totalSignatures}
                </Card.Text>

                {/* <Button variant="danger">Donate</Button> */}
                <div>
                  {" "}
                  <a
                    style={{
                      width: "100%",
                      backgroundColor: "#86c232",
                      textAlign: "center",
                      fontWeight: "600",
                      padding: "11px",
                      color: "black",
                      fontSize: "12",
                      display: "inline-block",
                      textDecoration: "none",
                      marginTop: "25px",
                      borderRadius: "10px",
                    }}
                    href="https://pmny.in/8IFnnKAeyEit"
                    target="_blank"
                  >
                    {" "}
                    Donate Now{" "}
                  </a>{" "}
                </div>
                <button style={{
                      textAlign: "center",
                      fontWeight: "400",
                      padding: "11px",
                      color: "white",
                      fontSize: "16px",
                      display: "inline-block",
                      textDecoration: "none",
                      marginTop: "5px",
                    }} onClick={()=>{
                  handleSubmitClick(campaign._id)
                }}>Sign Petition</button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <>rendering data</>
        )}
      </div>
      <SignandDonate/>
      <CarouselContainer />
      <FooterComponent />
    </div>
  );
}

export default UsersHomepage;