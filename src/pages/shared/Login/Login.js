import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from 'react-toastify';
import googleLogo from '../../../images/google-logo.png';
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    signInuser,
    signInLoading,
    signInError,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  const from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  if(signInLoading || GoogleLoading || loading){
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

  const handleGoogleLogin = () =>{
    signInWithGoogle()
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
    <div className="m-5 row">
      <Form onSubmit={handleLogin} className="mx-auto col-lg-4 col-sm-12">
          <h3 className="text-center mb-3 fw-bold">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={getEmail} className=" border border-dark" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Control onBlur={getPassword} className=" border border-dark" type="password" placeholder="Password" />
        </Form.Group>
        <button onClick={handleResetPassword} className="btn btn-link text-decoration-none mb-5 fs-6">Forgot your password?</button>
        <p className="text-danger">{signInError?.message} {GoogleError?.message}</p>
        <Button variant="dark" className="d-block mx-auto px-3 py-2" type="submit">
          Sign in
        </Button>
        <p>
            <Link className="text-decoration-none d-block text-center mt-3" to='/signup'>Create new account?</Link>
        </p>
        <Button onClick={handleGoogleLogin} variant="danger" className="d-block mx-auto w-100 text-start"><img width={30} className='me-2' src={googleLogo} alt="" /> Sign In With Google</Button>
      </Form>
    </div>
  );
};

export default Login;
