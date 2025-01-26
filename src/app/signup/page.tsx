'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import {toast, Toaster} from 'sonner';

function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      console.log('testing logs 1');
      const response = await axios.post('/api/users/signup', user);
      console.log('testing logs 2');
      console.log('Signup success', response.data);
      toast.success('Signup successful! Redirecting to login...');

      console.log('testing logs 2');
      setTimeout(() => {
        router.push('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Signup failed';
      console.log('Signup failed', errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Toaster />
      <h1>{loading ? 'processing' : 'Signup'}</h1>
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
        {buttonDisabled ? 'No Signup' : 'Signup'}
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}

export default SignupPage;
