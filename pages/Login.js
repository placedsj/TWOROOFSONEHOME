import React from 'react';
import { useLocation } from 'wouter';

function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    // Simulate a login process
    alert('Simulating login... Redirecting to dashboard.');
    setLocation('/dashboard');
  };

  return React.createElement(
    "div",
    { className: "min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center" },
    React.createElement(
      "div",
      { className: "bg-white p-10 rounded-xl shadow-lg w-full max-w-sm" },
      React.createElement(
        "h1",
        { className: "text-4xl font-serif font-bold text-royal-900 mb-6" },
        "Login"
      ),
      React.createElement(
        "form",
        { onSubmit: (e) => { e.preventDefault(); handleLogin(); } },
        React.createElement(
          "div",
          { className: "mb-4" },
          React.createElement("input", {
            type: "text",
            placeholder: "Username",
            className: "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
          })
        ),
        React.createElement(
          "div",
          { className: "mb-6" },
          React.createElement("input", {
            type: "password",
            placeholder: "Password",
            className: "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
          })
        ),
        React.createElement(
          "button",
          {
            type: "submit",
            className: "w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors"
          },
          "Log In"
        )
      ),
      React.createElement(
        "p",
        { className: "mt-6 text-sm text-slate-500" },
        "This is a placeholder login. Any credentials will \"work\"."
      )
    )
  );
}

export default Login;