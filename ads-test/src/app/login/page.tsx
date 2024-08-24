"use client";

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; 
import { useState } from 'react';
import Image from 'next/image';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (response?.ok) {
      console.log("Login successful");
      router.push("/home"); // Redirect to the desired page after login
    } else {
      console.error("Login failed");
    }
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
            className="w-full overflow-y-auto hidden md:block max-w-sm shadow-lg rounded-lg mb-6"
          />
          <h2 className="text-xl font-bold mb-2">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h2>
          <p className="text-gray-600">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
        </div>
      
        <div className="md:w-1/3 w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We're so excited to see you again!
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username / Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Username / Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="text-center text-sm">
              Need an account? <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up here</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
