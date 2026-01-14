import StaticLoginPage from "@/components/LoginForm/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      {/* Main Card */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        {/* ... */}
        <StaticLoginPage></StaticLoginPage>
      </div>
    </div>
  );
}
