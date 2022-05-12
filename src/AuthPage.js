import React, { useState } from 'react';
import { signUp, signIn, getUser } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken }) {
  const [signUpEmail, setSignUpEmail] = useState();
  const [signUpPassword, setSignUpPassword] = useState();

  const [{
    email: signInEmail,
    password: signInPassword,
  }, setSignInFormData] = useState({
    email: '',
    password: ''
  });

  async function handleSignUp(e) {
    e.preventDefault();

    await signUp(signUpEmail, signUpPassword);

    const {
      access_token, 
      user: {
        email,
      }
    } = getUser();

    setEmail(email);
    setToken(access_token);
  }

  async function handleSignIn(e) {
    e.preventDefault();

    await signIn(signInEmail, signInPassword);

    const {
      access_token,
      user: {
        email,
      }
    } = getUser();

    setEmail(email);
    setToken(access_token);
  }



  return (
    <><div className='auth-page'>
      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <label>
            email
          <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)}/>
        </label>
        <label>
            password
          <input type="password" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)}/>
        </label>
      </form>
    </div>
    <div>
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <label>
            email
          <input value={signInEmail} onChange={e => setSignInFormData({
            email: e.target.value,
            password: signInPassword,
          })}/>
        </label>
        <label>
            password
          <input type="password" value={signInPassword} onChange={e => setSignInFormData({
            email: signInEmail,
            password: e.target.value
          })}/>
        </label>
        <button>
            Sign In 
        </button>
      </form>
    </div></>
  ); 
}
