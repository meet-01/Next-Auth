'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import axios from 'axios';

function SignupPage() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onSignup = () => {
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Sign up screen</h1>
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(event) => {
          setUser({...user, username: event.target.value});
        }}
      />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(event) => {
          setUser({...user, email: event.target.value});
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(event) => {
          setUser({...user, password: event.target.value});
        }}
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Sign up
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}

export default SignupPage;
