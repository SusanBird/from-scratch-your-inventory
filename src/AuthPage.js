import React from 'react';

export default function AuthPage() {
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
