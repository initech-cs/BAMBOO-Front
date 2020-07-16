import React,{useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./SignupForm.css";

export default function SignupForm(props) {
  const [collapseID,setCollapseID] = useState("")
  const [userValid,setUserValid] = useState(false)
  const [passwordValid,setPasswordValid] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const toggleCollapse = collapseID => () =>
  setCollapseID(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={toggleCollapse("navbarCollapse")}
    />
  );
  const signup = ()=>{
    
  }

  const handleSubmit = ()=>{

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log({ email });
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log({ password });
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    console.log({ password });
  };
  const handleUserChange = ()=>{}
  return (
    <div>
       <div id="classicformpage">
        {/* <Router> */}
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
          </div>
        {/* </Router> */}

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center green-text">
                          <MDBIcon icon="user" /> Sign up
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={(e)=>handleEmailChange(e)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>handlePasswordChange(e)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Re-enter your password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>handleConfirmPasswordChange(e)}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo" onClick={()=>{props.addUser(props.username,props.email,props.password)}}>Sign Up</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                          <MDBBtn color="blue" size="sm"><MDBIcon fab icon="facebook-f" /> Facebook</MDBBtn>
                              
                          <MDBBtn color="red" size="sm"><MDBIcon fab icon="google" /> Google</MDBBtn>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  )
}
