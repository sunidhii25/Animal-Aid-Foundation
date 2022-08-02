import React from 'react'
import About from './About/About'
import SignandDonate from './SignandDonate/SignandDonate'
import Header from '../Header/Header'
import Petitions from "./Petitions/Petitions"
import Iframe from 'react-iframe';
import FooterComponent from '../Header/FooterComponent'

const Statistics = () => {
  return (
    <>
      <Header />
      
      <h1 style={{color: "#82C232", fontWeight: "700", fontSize: "44px"}}>Statistics</h1>
      <div style={{marginLeft: "30%"}}>
      <Iframe style="background: #00000;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-cfg-syylr/embed/charts?id=629b8fa4-e1e1-46b3-832c-35e1f17f1b01&maxDataAge=3600&theme=light&autoRefresh=true"></Iframe>

      <Iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-cfg-syylr/embed/charts?id=629b910e-e169-4ce5-8129-bd33ab4d5e10&maxDataAge=3600&theme=light&autoRefresh=true"></Iframe>

      <Iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-cfg-syylr/embed/charts?id=629b94a0-8cf8-490a-8e54-1261584009e6&maxDataAge=3600&theme=light&autoRefresh=true"></Iframe>
      </div>
      
      <FooterComponent />
    </>
  )
}

export default Statistics