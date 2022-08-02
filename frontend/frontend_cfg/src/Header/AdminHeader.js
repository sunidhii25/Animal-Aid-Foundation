import React from 'react'

const AdminHeader = () => {
    return (
        <>
            <div className="header_section">

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundImage:
          "url(./images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
          backgroundSize: "cover", height:'12vh',
          paddingTop: '70px'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <h1 style={{color: '#fff'}}><b><i>Animal Aid Foundation</i></b></h1>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/admin_home" style={{color: '#86c232'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin_campaign" style={{color: '#86c232'}}>Add Campaign</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/admin_payment" style={{color: '#86c232'}}>Payment Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin_users" style={{color: '#86c232'}}>View Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin_blog"style={{color: '#86c232'}}>Let's Talk</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                       <ul>
                           <li>
                           <a className="nav-link" href="/" style={{color: "#f76c6c"}}>Log Out</a>
                           </li>
                       </ul>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader