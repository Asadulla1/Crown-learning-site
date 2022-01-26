import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Course = (props) => {
  const { img, name, instructor, fee } = props.course;
  return (
    <div>
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

export default Course;
