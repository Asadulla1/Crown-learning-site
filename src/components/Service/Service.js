import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Service.css";
const Service = (props) => {
  const { img, name, instructor, fee } = props.service;
  return (
    <div className="mb-5">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} className="img-size" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Instructor Name: {instructor} <br />
              Fee : {fee}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
