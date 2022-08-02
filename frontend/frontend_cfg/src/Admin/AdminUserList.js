import React, { useState, useEffect } from "react";
import "./adminUserListStyle.css";
import AdminHeader from "../Header/AdminHeader";
import axios from "axios";

function AdminUserList() {
const API = axios.create({ baseURL: "http://localhost:3000" });
const [users, setUsers] = useState([]);

const getAllUsers = async() => {
  const response = await API.get("/user/getAllUsers");
  const data = response.data.data;
  setUsers(data);
}
useEffect(() => {
  getAllUsers();
}, [])

  return (
    <div style={{ backgroundImage:
          "url(./images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
          backgroundSize: "cover", minHeight: '100vh'}}>
    <AdminHeader/>
      <div>
        <p style={{textAlign: 'center', fontSize: '32px', color: '#fff', paddingTop: '35px'}}>
          <b>
            Registered Users
          </b>
        </p>
      </div>

      <div className="row" style={{paddingLeft: '150px', paddingTop: '25px'}}>
        
        {
          users.map((user) => (
            <div
          className="col-lg-4 col-md-6 d-flex"
          style={{
            height: "200px",
            margin: "35px",
            borderRadius: "0.5rem",
            backgroundColor: "#222629",
            width: "350px",
            padding: "10px",
            zIndex: 10
          }}
          onClick={() =>
            window.location.replace("http://localhost:3000/victim")
          }
        >
          <div className="icon-box" style={{backgroundColor: "#222629", height:"100%", width:"100%", zIndex:'10'}}>
            <div style={{display: 'flex'}}>
              <p style={{color: '#fff', fontWeight:"400", marginRight: '12px', marginLeft: '5px', marginTop: '1px', fontSize:'18px', marginBottom: '30px'}}>Name: </p><p style={{color: '#86c232', fontWeight:"400", fontSize:'24px'}}>{user.name}</p>
            </div>
            <div style={{display: 'flex'}}>
              <p style={{color: '#fff', fontWeight:"400", marginRight: '12px', marginLeft: '5px', marginTop: '1px', fontSize:'18px', marginBottom: '30px'}}>Email: </p><p style={{color: '#86c232', fontWeight:"400", fontSize:'24px'}}>{user.email}</p>
            </div>
            <div style={{display: 'flex'}}>
              <p style={{color: '#fff', fontWeight:"400", marginRight: '12px', marginLeft: '5px', marginTop: '1px', fontSize:'18px', marginBottom: '30px'}}>Phone: </p><p style={{color: '#86c232', fontWeight:"400", fontSize:'24px'}}>{user.mobile}</p>
            </div>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default AdminUserList;