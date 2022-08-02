import React from 'react'

const SignandDonate = () => {
    return (
        <>
            <div className="banner_section layout_padding">
                
                <div className="fundraise_section">
                    <div className="fundraise_section_main">
                        <div className="row">
                            <div className="col-lg-4" >
                                <div className="box_main" style={{backgroundColor: "#61892F"}}>
                                    <div className="icon_1"><img src="images/icon-1.png" /></div>
                                    <h4 className="volunteer_text">VOLUNTEERS</h4>
                                    <p className="lorem_text">Become the part of our family and save millions of animals</p>
                                    <div className="join_bt"><a href="/signup">Join Now</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box_main active" style={{backgroundColor: "#61892F"}}>
                                    <div className="icon_1"><img src="images/icon-2.png" /></div>
                                    <h4 className="volunteer_text" style={{marginTop: "2px"}} >FUNDRAISE</h4>
                                    <p className="lorem_text" >Help raise funds to try and save lots of precious and innocent lives</p>
                                    <div className="join_bt"><a href="#">Join Now</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box_main" style={{backgroundColor: "#61892F"}}>
                                    <div className="icon_1"><img src="images/icon-3.png" /></div>
                                    <h4 className="volunteer_text" style={{marginTop: "12px"}}>DONATION</h4>
                                    <p className="lorem_text">Donate to help for the greater good and save millions of lives</p>
                                    <div className="join_bt"><a href="https://pmny.in/8IFnnKAeyEit">Join Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignandDonate