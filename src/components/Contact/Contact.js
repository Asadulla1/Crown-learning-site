import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="d-lg-flex justify-content-between container-fluid">
      <div className="mt-5 mb-5 App">
        <h1>
          Lets Talk About
          <br />
          Everything!!
        </h1>
        <p>
          If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <img
          className="w-50"
          src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
          alt=""
        />
      </div>
      <div className="my-auto media-query ">
        <div className="margin">
          <InputGroup className="mb-3 ">
            <FormControl
              placeholder="Your Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Subject"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup>
            <FormControl
              className="p-4"
              as="textarea"
              aria-label="With textarea"
              placeholder="Write your message"
            />
            <br />
          </InputGroup>
          <Button className="mt-2 p-2 " variant="dark">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
