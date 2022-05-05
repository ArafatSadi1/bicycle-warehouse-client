import React from "react";
import { Button, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <div className="my-5">
      <Form className="w-25 mx-auto">
          <h3 className="text-center mb-3 fw-bold">Create Account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="border border-dark" type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  className="border border-dark" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control  className="border border-dark" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control  className="border border-dark" type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree all terms & condition" />
        </Form.Group>
        <Button variant="dark" className="d-block mx-auto px-3 py-2" type="submit">
          Sign up
        </Button>
      </Form>{" "}
    </div>
  );
};

export default Signup;
