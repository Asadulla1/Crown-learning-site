import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./CoursesfakeDb.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mb-5 App">
      <h1 className="mb-3 ">The Courses We Offer</h1>
      <Row xs={1} md={2} lg={3} className="g-4 w-75 mx-auto">
        {courses.map((course) => (
          <Course key={course.fee} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
