import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
const API = axios.create({ baseURL: "http://localhost:3000" });
const Events = () => {

    const [data, setData] = useState([]);
    const getCampaigns = async () => {
      const response = await API.get("campaign/getCampaigns");
      console.log(response);
      const d = response.data.data;
      setData(d);
      console.log(d);
    };
    useEffect(() => {
      getCampaigns();
    }, []);
    return (
        <>
            <div class="events_section layout_padding" style={{backgroundImage: 'url(./images/background.jpg)'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="news_taital" style={{color: '#ffff'}}>Our Campaigns</h1>
                            <p class="news_text" style={{color: '#61892f', marginBottom:'30px', fontWeight: '400'}}>Following are some of the campaigns that we have got on our website </p>
                        </div>
                    </div>
                   {
                        data && data.length > 0 ? (
                            data.map((campaign) => (
                                <div class="events_section_2" style={{backgroundColor: '#222629', marginBottom: '15px', border: '1px solid #fff', borderRadius: '10px'}} >
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="img_7"><img src="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2020/01/frontiers-psychology-stray-dogs-human-cues-behavior.jpg?fit=1000%2C562&ssl=1" class="img_7" /></div>
                                        {/* <div class="date_bt">
                                            <div class="date_text active"><a href="#">START : {campaign.startDate}</a></div>
                                            <div class="date_text"><a href="#">END : {campaign.endDate}</a></div>
                                        </div> */}
                                    </div>
                                    <div class="col-md-7">
                                        <h1 class="give_taital_1">{campaign.title}</h1>
                                        <p class="ipsum_text_1">{campaign.desc}</p>
                                        <h5 class="raised_text_1">Petition Signed: {campaign.noOfSignatures}<span class="goal_text">Goal: {campaign.totalSignatures}</span></h5>
                                        <div style={{width:'100%', color: '#fff', textAlign:'left', display: 'flex', flexDirection:'column'}}>
                                         <p style={{fontSize: '14px',fontWeight: '400' }}>Start date: <span style={{color:'#86c232'}}>{campaign.startDate}</span></p>
                                          <p style={{fontSize: '14px',fontWeight: '400' }}>End date: <span style={{color:'#f76c6c'}}>{campaign.endDate}</span></p>
                                        </div>
                                        <div class="donate_btn_main">
                                            <div class="readmore_btn"><a
                                        style={{
                                          width: "200px",
                                          backgroundColor: "#86c232",
                                          textAlign: "center",
                                          fontWeight: "600",
                                          padding: "11px",
                                          color: "black",
                                          fontSize: "12",
                                          display: "inline-block",
                                          textDecoration: "none",
                                          marginRight: '20px',
                                          marginTop: '40px',
                                          border: 'none',
                                        }}
                                        href="https://www.earthday.org/campaign/end-plastic-pollution/"
                                        target="_blank"
                                      >
                                        {" "}
                                        ReadMore{" "}
                                      </a></div>
                                        <div className="readmore_btn_1"> <a
                                        style={{
                                          width: "200px",
                                          backgroundColor: "red",
                                          textAlign: "center",
                                          fontWeight: "600",
                                          padding: "11px",
                                          color: "#fff",
                                          fontSize: "12",
                                          display: "inline-block",
                                          textDecoration: "none",
                                          marginTop: '40px',
                                          border: 'none',
                                        }}
                                        href="https://pmny.in/8IFnnKAeyEit"
                                        target="_blank"
                                      >
                                        {" "}
                                        Donate Now{" "}
                                      </a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))
                                              ) : (
                                                <>rendering data</>
                                              )
                                      }
                                    
                </div>
            </div>
        </>
    )
}

export default Events