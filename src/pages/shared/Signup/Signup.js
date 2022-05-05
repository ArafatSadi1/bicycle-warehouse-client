import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init"
import Loading from "../Loading/Loading";


const Signup = () => {
  const [agree, setAgree] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user, userError, loading] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if(loading){
    return(<Loading></Loading>)
  }

  if(user){
    navigate('/')
  }


  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const getConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      setError("Your Password do not match");
      return;
    }
    if (password.length < 6) {
      setError("minimum password character should be 6 or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="my-5">
      <Form onSubmit={handleSignUp} className="w-25 mx-auto">
        <h3 className="text-center mb-3 fw-bold">Create Account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={getEmail}
            className="border border-dark"
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={getPassword}
            className="border border-dark"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={getConfirmPass}
            className="border border-dark"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-5 ms-3" controlId="formBasicCheckbox">
          <Form.Check className={`ps-2 ${agree? "" : "text-danger"}`} onClick={()=>{setAgree(!agree)}} type="checkbox" label="Agree all terms & condition" />
        </Form.Group>
        <p className="text-danger">{error} {userError?.message}</p>
        <Button
          disabled={!agree}
          variant="dark"
          className="d-block mx-auto px-3 py-2 fw-bold"
          type="submit"
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
