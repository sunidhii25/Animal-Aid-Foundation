import React from "react";
import AdminHeader from "../Header/AdminHeader";
function Adminpaymentlist() {
  const users = [
    {
      name: "Dhruv Naveen",
      amount: "Rs 1500.00" ,
      date: "2/02/2022",
    },
    {
      name: "Saksham",
      amount: "Rs 225.00",
      date: "10/04/2022",
    },
    {
      name: "Piyush",
      amount: "Rs 1000.00",
      date: "21/05/2022",
    },
    ,
    {
      name: "Manav",
      amount: "Rs 150.00",
      date: "20/05/2022",
    },
    ,
    {
      name: "Piyush",
      amount: "Rs 2000.00",
      date: "23/05/2022",
    },
  ];
  return (
    <div style={{ height:'100vh', backgroundImage:
          "url(./images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
          backgroundSize: "cover"}}>
      <AdminHeader/>
      {users.length == 0 && (
        <h3 className="text-danger text-center mt-5">No Donation History</h3>
      )}
      {users.length != 0 && (
        <>
          <h1 className="text-center mt-5" style={{color: '#86c232', fontSize:'32px', fontWeight: '700'}}>Donation History</h1>
          <table border="2" className="table text-center mt-5">
            <thead>
              <tr style={{color: '#f76c6c', fontSize:'28px', fontWeight: '600'}}>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userObj) => (
                <tr>
                  <td style={{color: '#fff', fontSize:'22px', fontWeight: '400'}}>{userObj.name}</td>
                  <td style={{color: '#86c232', fontSize:'22px', fontWeight: '400'}}>{userObj.amount}</td>
                  <td style={{color: '#fff', fontSize:'22px', fontWeight: '400'}}>{userObj.date}</td>
                </tr> 
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Adminpaymentlist;