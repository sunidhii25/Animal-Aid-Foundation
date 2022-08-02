import { Button, ButtonGroup } from "@chakra-ui/react";
import UsersHomepage from "./Users/UsersHomepage";
import Adminlogin from "./Admin/Adminlogin";
import Admincampaignlist from "./Admin/Admincampaignlist";
import Signup from "./Users/Signup";
import Login from "./Users/Login";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adminpaymentlist from "./Admin/Adminpaymentlist";
import AdminUserList from "./Admin/AdminUserList";
import AdminCampaign from "./Admin/AdminCampaign";
import Statistics from "./Dashboard/Satistics";
import BlogPost from "./Admin/BlogPost";
import Aboutwe from "./Users/Aboutwe";
import ContactUs from "./Users/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/admin_login" element={<Adminlogin />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/userhome" element={<UsersHomepage />}></Route>
          <Route exact path="/admin_campaign" element={<Admincampaignlist />}></Route>
          <Route exact path="/admin_payment" element={<Adminpaymentlist />}></Route>
          <Route exact path="/admin_users" element={<AdminUserList />}></Route>
          <Route exact path="/admin_home" element={<AdminCampaign />}></Route>
          <Route exact path="/stats" element={<Statistics />}></Route>
          <Route exact path="/admin_blog" element={<BlogPost />}></Route>
          <Route exact path="/about" element={<Aboutwe />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>

        </Routes>
      </Router>
    </div>
  );
  // return <UserPetition />;
}

export default App;
