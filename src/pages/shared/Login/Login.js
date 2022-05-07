import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from 'react-toastify';
import googleLogo from '../../../images/google-logo.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    signInuser,
    signInLoading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  if(loading){
    return <Loading></Loading>
  }
  
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const handleResetPassword = async(event) =>{
    event.preventDefault()
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');  
    }
    else{
      toast('Please Enter Your Email')
    }
  }
  return (
    <div className="my-5 ">
      <Form onSubmit={handleLogin} className="w-25 w-md-50 mx-auto">
          <h3 className="text-center mb-3 fw-bold">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={getEmail} className=" border border-dark" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Control onBlur={getPassword} className=" border border-dark" type="password" placeholder="Password" />
        </Form.Group>
        <button onClick={handleResetPassword} className="btn btn-link text-decoration-none mb-5 fs-6">Forgot your password?</button>
        <p className="text-danger">{error?.message}</p>
        <Button variant="dark" className="d-block mx-auto px-3 py-2" type="submit">
          Sign in
        </Button>
        <p>
            <Link className="text-decoration-none d-block text-center mt-3" to='/signup'>Create new account</Link>
        </p>
      </Form>
      <Button variant="danger" className="d-block mx-auto w-25 text-start"><img width={30} className='me-2' src={googleLogo} alt="" /> Sign In With Google</Button>
    </div>
  );
};

export default Login;
