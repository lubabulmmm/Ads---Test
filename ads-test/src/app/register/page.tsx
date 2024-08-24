"use client";

import { useRouter } from 'next/navigation'; // Mengimpor useRouter dari next/navigation
import { useState } from 'react';
import Image from 'next/image';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    whatsapp: '',
    password: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registration successful", formData);
    router.push("/login"); // Redirect to the login page after registration
  };

  return (
    <>
      <header className="w-full py-4 bg-gray-100 flex justify-between items-center px-8 md:px-12">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" width={32} height={32} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-black">FORWARDIN</span>
        </div>
      </header>

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
        <div className="md:w-1/2 w-full p-4 flex flex-col items-center text-center md:text-left">
          <Image 
            src="/gambar6.png" 
            alt="Admin Dashboard" 
            width={500} 
            height={500} 
            className="w-full hidden md:block max-w-sm shadow-lg rounded-lg mb-6"
          />
          <h2 className="text-xl font-bold mb-2">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h2>
          <p className="text-gray-600">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami.
          </p>
        </div>

        <div className="md:w-1/3 w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Welcome to Fowardin
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Revolutionize your communication journey with Fowardin today
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="sr-only">
                  WhatsApp Phone Number
                </label>
                <div className="flex">
                  <select
                    id="country-code"
                    name="country-code"
                    className="rounded-l-md border-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="WhatsApp Phone Number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center text-sm">
              Sudah punya akun? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Masuk di sini</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
