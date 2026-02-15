import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';

function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    if (!username.trim()) {
      setError('Username is required.');
      return false;
    }
    // Basic alphanumeric check for username to prevent potential injection (though client-side)
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setError('Username can only contain letters, numbers, and underscores.');
      return false;
    }
    if (!password) {
      setError('Password is required.');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      setIsLoading(true);
      // Simulate a login process
      // In a real app, this would be an API call
      setTimeout(() => {
        setIsLoading(false);
        setLocation('/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm text-left">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6 text-center">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold text-slate-700 mb-2">
              Username
            </label>
            <input 
              id="username"
              type="text" 
              required
              placeholder="Username" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:bg-slate-50 disabled:text-slate-500 transition-all"
              disabled={isLoading}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              required
              placeholder="Password" 
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:bg-slate-50 disabled:text-slate-500 transition-all"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:shadow-none"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : null}
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500">
        <p className="mt-6 text-sm text-slate-500 text-center">
          This is a placeholder login. Any credentials (min 8 chars) will "work".
        </p>
      </div>
    </div>
  );
}

export default Login;
