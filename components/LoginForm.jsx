"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script"
import {FileText, Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, EyeOff, UserRound } from 'lucide-react';
import '../style/login.scss';

export default function LoginForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }
      console.log("here");
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      console.log(res.body);

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.reload("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    // <div className="grid place-items-center h-screen">
    //   <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
    //     <h1 className="text-xl font-bold my-4">Login</h1>

    //     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="text"
    //         placeholder="Email"
    //       />
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //       />
    //       <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
    //         Login
    //       </button>
    //       {error && (
    //         <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
    //           {error}
    //         </div>
    //       )}

    //       <Link className="text-sm mt-3 text-right" href={"/register"}>
    //         Don't have an account? <span className="underline">Register</span>
    //       </Link>
    //     </form>
    //   </div>
    // </div>

    <div className="bodylogin">    
            <Script 
                type="text/javascript"  
                async 
                defer 
                src="/static/index.js"
            />
            <div className="background"></div>
            <div className="container">
                <div className="item">
                    <div className="flex gap-5">
                            <FileText className="w-10 h-10 scale-150 m-2"/>
                            <h2 className="logo">Joko Docs</h2>
                    </div>
                    <div className="text-item">
                        <h2>Welcome! <br/> <span> To Our Website </span> </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellendus?</p>
                        <div className="social-icon flex gap-5">
                            <Facebook/>
                            <Twitter/>
                            <Youtube/>
                            <Instagram/>
                            <Linkedin/>
                        </div>
                    </div>
                </div>
                <div className="login-section">
                    <div className="form-box login">
                        <form onSubmit={handleSubmitLogin}>
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <Mail className="icon"/>
                                <input 
                                    className="placeholder-gray-100 p-2 focus:outline-none focus:border-gray-600 text-white"
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                                
                            </div>
                            <div className="input-box">
                                <EyeOff className="icon"/>
                                <input 
                                    className="placeholder-gray-100 p-2 focus:outline-none focus:border-gray-600 text-white"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button className="btn">Login In</button>
                            <div className="create-account">
                                <p>Create A New Account? <a href="#" className="register-link">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="form-box register">
                        <form onSubmit={handleSubmitSignUp}>
                            <h2>Sign Up</h2>
                            <div className="input-box">
                                <UserRound className="icon"/>
                                <input 
                                    className="placeholder-gray-100 p-2 focus:outline-none focus:border-gray-600 text-white"
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <Mail className="icon"/>
                                <input 
                                    className="placeholder-gray-100 p-2 focus:outline-none focus:border-gray-600 text-white"
                                    id="emailSignUp"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <EyeOff className="icon"/>
                                <input 
                                    className="placeholder-gray-100 p-2 focus:outline-none focus:border-gray-600 text-white"
                                    id="passwordSignUp"
                                    type="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="remember-password">
                            </div>
                            <button type="submit" className="btn">Register</button>
                            <div className="create-account">
                                <p>Already Have An Account? <a href="#" className="login-link">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}
