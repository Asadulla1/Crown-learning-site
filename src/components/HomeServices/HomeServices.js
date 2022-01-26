import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./homeServicedb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="mt-3 mb-3 App">Most Popular Course </h1>

      <Row xs={1} md={2} lg={4} className="g-4 w-75 mx-auto">
        {services.map((service) => (
          <Service key={service.fee} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default HomeServices;
