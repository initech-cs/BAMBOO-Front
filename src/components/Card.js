import React, { useState, useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { MDBTypography } from 'mdbreact'
export default function Card() {
    let history = useHistory();

    const jobSelect = () => {
      history.push(`/job/${job.id}`);
    };
    if (job == null) {
      return <div>no data yet</div>;
    }
  return <>
   <div className="job-content" onClick={() => jobSelect()}>
      
    </div>
  </>;
}
