import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-5 ">
      <Form className="w-25 w-md-50 mx-auto">
          <h3 className="text-center mb-3 fw-bold">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className=" border border-dark" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Control className=" border border-dark" type="password" placeholder="Password" />
        </Form.Group>
        <button className="btn btn-link text-decoration-none mb-5 fs-6">Forgot your password?</button>
        <Button variant="dark" className="d-block mx-auto px-3 py-2" type="submit">
          Sign in
        </Button>
        <p>
            <Link className="text-decoration-none d-block text-center mt-3" to='/signup'>Create account</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
