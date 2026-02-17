import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { RefreshCw } from 'lucide-react';

function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a login process
    setTimeout(() => {
      alert('Simulating login... Redirecting to dashboard.');
      setLocation('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input 
              id="username"
              name="username"
              type="text" 
              placeholder="Username" 
              required
              autoComplete="username"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              id="password"
              name="password"
              type="password" 
              placeholder="Password" 
              required
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <RefreshCw className="animate-spin mr-2 h-5 w-5" />
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
