import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';

function Login() {
  const [, setLocation] = useLocation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate a login process with a delay instead of an alert
    setTimeout(() => {
      setLocation('/dashboard');
      setIsLoggingIn(false);
    }, 1500);
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
              type="text" 
              placeholder="Username" 
              autoComplete="username"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password"
              name="password"
              type="password" 
              placeholder="Password" 
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoggingIn}
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              'Log In'
            )}
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
