import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "./Navbar.css";
import ProjectSec from "./ProjectSec.js";
class Navbar2 extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    console.log(this.props); 
    return (
      <div id="videobackground">
        {/* <Router> */}
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <MDBBtn gradient="peach">DAEQUAN</MDBBtn>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="!#">
                      <MDBIcon fab icon="facebook-f" />
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                  </MDBNavItem>
                  {this.props.user?null:<MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>}
                  
                  <MDBDropdown>
                    {this.props.user?<MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>:null}
                    
                    {this.props.user ? 
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="/profile">
                        Your Profile
                      </MDBDropdownItem>
                      <MDBDropdownItem >Logout</MDBDropdownItem>
                    </MDBDropdownMenu>:null}
                  </MDBDropdown>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
        {/* </Router> */}

        <MDBView>
          <video
            className="video-intro"
            poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
            playsInline
            autoPlay
            muted=""
            loop
          >
            <source
              src="https://mdbootstrap.com/img/video/animation.mp4"
              type="video/mp4"
            />
          </video>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                    Bamboo Trees{" "}
                  </h3>
                  <hr className="hr-light my-4 w-75" />
                  <h4 className="subtext-header mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    deleniti consequuntur nihil.
                  </h4>
                  <MDBBtn outline rounded color="white">
                    <MDBIcon icon="home" /> Visit us
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Navbar2;
