import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Lock, AlertTriangle } from 'lucide-react';

function Login() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Security: Rate limiting state
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Auto-unlock after 30 seconds
  useEffect(() => {
    if (isLocked) {
      const timer = setTimeout(() => {
        setIsLocked(false);
        setAttempts(0);
        setError('');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [isLocked]);

  const validateInput = () => {
    if (!username.trim()) {
      setError('Username is required.');
      return false;
    }
    // Basic alphanumeric check for username to prevent potential injection
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
    // Security: Enforce password complexity
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setError('Password must contain uppercase, lowercase, number, and special character.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      return;
    }

    if (!validateInput()) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setIsLocked(true);
        setError('Too many failed attempts. Account locked for 30 seconds.');
      }
      return;
    }

    // Simulate a login process
    // In a real app, this would be an API call
    setLocation('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm relative overflow-hidden">
        {isLocked && (
          <div className="absolute inset-0 bg-slate-100/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 animate-in fade-in duration-300">
            <Lock size={48} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-800">Account Locked</h3>
            <p className="text-sm text-slate-600 mt-2">Too many failed attempts.</p>
            <p className="text-xs text-slate-500 mt-1">Please wait 30 seconds.</p>
          </div>
        )}

        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-6">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-left flex items-start gap-2">
            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLocked}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:bg-slate-100"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLocked}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:bg-slate-100"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLocked}
            className="w-full px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLocked ? 'Locked' : 'Log In'}
          </button>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          Security: Strong passwords & rate limiting active.
        </p>
      </div>
    </div>
  );
}

export default Login;
