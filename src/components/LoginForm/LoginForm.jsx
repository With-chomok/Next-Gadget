"use client";
import React from "react";
import { Lock, Mail, ArrowRight, Laptop } from "lucide-react";
import Link from "next/link";

const StaticLoginPage = () => {
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
      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="email"
              disabled
              placeholder="admin@nextgadget.com"
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-not-allowed"
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
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="password"
              disabled
              placeholder="••••••••••••"
              className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-not-allowed"
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
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transform transition-active active:scale-[0.98] shadow-lg shadow-blue-200">
          Sign In
          <ArrowRight size={20} />
        </button>
      </div>

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
