import React from "react";
import { MDBMedia, MDBIcon, MDBContainer } from "mdbreact";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "./QuestionList.css"
const MediaObjectPage = () => {
  const jobSelect = ()=>{

  }
  return (
    <MDBContainer >
        <div className="job-content m-1" onClick={() => jobSelect()}>
      <Row>
        <Col>
          <div className="jobcard-logo">
           Logo
          </div>
        </Col>
        <Col xs={8}>
          <div className="jobcard-descriptions">
            <h2 className="jobcard-title">Title</h2>
            <div>Description</div>
            <div>
              <ul className="benefit-list">
                Categories
              </ul>
            </div>
            <div>
              Source
            </div>
          </div>
        </Col>
        <Col>
          <div className="date-location-box">
            Description
            <div className="jobcard-location">
              {/* <div>{job.city}</div>
            <div>District {job.district}</div> */}
            </div>
            <div className="job-time">Time</div>
          </div>
        </Col>
      </Row>
    </div>
    </MDBContainer>
  
  );
};

export default MediaObjectPage;
