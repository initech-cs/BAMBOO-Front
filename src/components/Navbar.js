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
          <MDBNavbar dark expand="md fixed-top d-inline-flex" >
            <MDBContainer>
              <MDBNavbarBrand>
              <MDBBtn outline color="success">BambooSoft</MDBBtn>
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
                    <MDBNavLink to="/"> <MDBBtn color="transparent" size="sm">Home</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/question"> <MDBBtn color="transparent" size="sm">Questions</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/developer"> <MDBBtn color="transparent" size="sm">Developers</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="!#">
                    <MDBBtn color="blue" size="sm"><MDBIcon fab icon="facebook-f" /> Facebook</MDBBtn>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink to="/signup"><MDBBtn color="dark-green" size="sm">Signup</MDBBtn></MDBNavLink>
                  </MDBNavItem>
                  {this.props.user?null:<MDBNavItem>
                    <MDBNavLink to="/login"><MDBBtn color="dark-green" size="sm">Login</MDBBtn></MDBNavLink>
                  </MDBNavItem>}
                  
                  <MDBDropdown>
                    {this.props.user?<MDBDropdownToggle nav caret>
                      <MDBBtn color="transparent" size="sm"><MDBIcon icon="user" /></MDBBtn>
                    </MDBDropdownToggle>:null}
                    
                    {this.props.user ? 
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="/profile">
                         Profile
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={()=>{this.props.logout()}}>Logout</MDBDropdownItem>
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
            poster=""
            playsInline
            autoPlay
            muted={true}
            loop
          >
            <source
              src="bamboo2.mp4"
              type="video/mp4"
              repeat={true}
            />
          </video>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 text-success text-center">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                    Bamboo Trees{" "}
                  </h3>
                  <hr className="hr-light my-4 w-75" />
                  <h4 className="subtext-header mt-2 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    deleniti consequuntur nihil.
                  </h4>
                  <MDBBtn outline rounded color="white">
                    <MDBIcon icon="home" /> Check out our Question
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