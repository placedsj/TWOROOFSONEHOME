import React from 'react';
import { useLocation } from 'wouter';

function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    // Simulate a login process
    alert('Simulating login... Redirecting to dashboard.');
    setLocation('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6">Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4">
            <label htmlFor="username" className="sr-only">Username</label>
            <input 
              id="username"
              name="username"
              autoComplete="username"
              type="text" 
              placeholder="Username" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password"
              name="password"
              autoComplete="current-password"
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          This is a placeholder login. Any credentials will "work".
        </p>
      </div>
    </div>
  );
}

export default Login;
