import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';

function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a login process
    setTimeout(() => {
      setLocation('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Username" 
              aria-label="Username"
              required
              autoComplete="username"
              disabled={isLoading}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:bg-slate-50"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              aria-label="Password"
              required
              autoComplete="current-password"
              disabled={isLoading}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:bg-slate-50"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Logging in...</span>
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
