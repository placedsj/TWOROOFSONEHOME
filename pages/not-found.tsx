import React from 'react';
import { Link } from 'wouter';

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-serif font-bold text-royal-900 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-700 mb-6">Page Not Found</h2>
      <p className="text-lg text-slate-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="px-6 py-3 bg-gold-600 text-white font-bold rounded-lg hover:bg-gold-500 transition-colors">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
