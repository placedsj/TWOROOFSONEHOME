import React, { useState } from 'react';
import { useLocation } from 'wouter';

function Login() {
  const [, setLocation] = useLocation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate a login process with visual feedback
    setTimeout(() => {
      setLocation('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6">Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4 text-left">
            <label htmlFor="username" className="sr-only">Username</label>
            <input 
              id="username"
              type="text" 
              placeholder="Username" 
              autoComplete="username"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Password" 
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoggingIn}
            aria-live="polite"
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging In...
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
