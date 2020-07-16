import React from "react";
import { MDBMedia, MDBIcon, MDBContainer } from "mdbreact";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";
import "./QuestionList.css";
const MediaObjectPage = (props) => {
  const jobSelect = () => {};
  return (
    <MDBContainer>
      <div className="job-content m-1" onClick={() => jobSelect()}>
        <Row>
          <Col>
            <div className="jobcard-logo">
              <img src={props.logo} width="220px" height="150 px" />
            </div>
          </Col>
          <Col xs={8}>
            <div className="jobcard-descriptions">
              <h2 className="jobcard-title">{props.title}</h2>
              <div>
                {props.description}
                <div>
                  <a href={props.source}>Source</a>
                </div>
              </div>

              <div>
                <ul className="benefit-list">{props.categories}</ul>
              </div>
            </div>
          </Col>
          <Col>
           
            <div className="date-location-box">
            <h5 className="hotjob-label">
              RATING DIFFICULTIES: {props.difficulties}/10{" "}
            </h5>
              <div className="jobcard-location">{props.author}</div>
            </div>
          </Col>
        </Row>
      </div>
    </MDBContainer>
  );
};

export default MediaObjectPage;
