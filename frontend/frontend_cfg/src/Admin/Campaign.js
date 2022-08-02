import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3000" });
//var data = {};
function Campaign() {
  const [data, setData] = useState([]);
  const getCampaigns = async () => {
    const response = await API.get("campaign/getCampaigns");
    //console.log(response.data.data);
    const d = response.data.data;
    setData(d);
    //console.log(data);
  };
  useEffect(() => {
    getCampaigns();
  }, []);
  
  return (
    <div>
      <div className="campaign">
        {data && data.length > 0 ? (
          data.map((campaign) => (
            <Card style={{width: "100vw", backgroundColor:'#222629', marginBottom: '10px', borderRadius: '10px'}}>
              <Card.Body>
                <Card.Title style={{color: '#fff', fontSize: '32px', marginBottom: '15px'}}>{campaign.title}</Card.Title>
                <Card.Text style={{color: '#61892f', fontSize: '22px', textAlign:'center', fontWeight:'400',marginBottom: '5px'}}>{campaign.desc}</Card.Text>
                <Card.Text style={{color: '#f76c6c', fontSize: '22px', textAlign:'center', fontWeight:'400',marginBottom: '5px'}}>{campaign.type}</Card.Text>
                <Card.Text style={{color: '#86c232', fontSize: '22px', textAlign:'center', fontWeight:'400',marginBottom: '5px'}}>{campaign.status}</Card.Text>
                <Card.Text style={{color: '#fff', fontSize: '18px', textAlign:'center', fontWeight:'400',marginBottom: '5px'}}>{campaign.createdAt}</Card.Text>
                <Card.Text>
                  {campaign.noOfSignatures}/{campaign.totalSignatures}
                </Card.Text>

                {/* <Button variant="danger">Donate</Button> */}
                <div>
                  {" "}
                  <a
                    style={{
                      width: "50%",
                      backgroundColor: "#61892f",
                      textAlign: "center",
                      fontWeight: "600",
                      padding: "11px",
                      color: "white",
                      fontSize: "12",
                      display: "inline-block",
                      textDecoration: "none",
                      borderRadius: '10px',
                      marginTop: '10px',
                    }}
                    href="https://pmny.in/8IFnnKAeyEit"
                    target="_blank"
                  >
                    {" "}
                    Donate Now{" "}
                  </a>{" "}
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <>rendering data</>
        )}
      </div>
    </div>
  );
}

export default Campaign;