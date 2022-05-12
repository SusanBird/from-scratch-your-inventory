import React, { useState } from 'react';
import { signUp } from './services/fetch-utils';

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
  }



  return (
    <><div>
      <form>
        <h3>Sign Up</h3>
        <label>
            email
          <input />
        </label>
        <label>
            password
          <input />
        </label>
      </form>
    </div>
    <div>
      <form>
        <h3>Sign In</h3>
        <label>
            email
          <input />
        </label>
        <label>
            password
          <input />
        </label>
      </form>
    </div></>
  ); 
}
