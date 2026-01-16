"use client";
import React, { useState } from "react";
import { Lock, Mail, ArrowRight, Laptop } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Google from "next-auth/providers/google";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const StaticLoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456789") {
      document.cookie = "auth=true; path=/";
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/items");
      }, 1500);
    } else {
      toast.error("Invalid email or password");
      return;
    }
  };
  return (
    <div className="p-10">
      {/* Logo & Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 text-blue-600">
          <Laptop size={32} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-gray-500 mt-2 font-medium">
          Please sign in to your account
        </p>
      </div>

      {/* Static Form Inputs */}
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center ">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all "
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between mb-2 ml-1">
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <span className="text-xs text-blue-600 font-bold hover:underline cursor-pointer">
              Forgot?
            </span>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center ">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all "
            />
          </div>
        </div>

        {/* Remember Me Toggle (Static) */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 block text-sm text-gray-600">
            Remember me for 30 days
          </label>
        </div>

        {/* Static Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transform transition-active active:scale-[0.98] shadow-lg shadow-blue-200">
          Sign In
          <ArrowRight size={20} />
        </button>
        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google")}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-3.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98] shadow-sm">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </form>

      {/* Bottom Link */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <span className="text-blue-600 font-bold hover:underline cursor-pointer">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default StaticLoginPage;
