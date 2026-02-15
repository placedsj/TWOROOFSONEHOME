import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-royal-900" size={48} />
        <p className="text-slate-500 font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
