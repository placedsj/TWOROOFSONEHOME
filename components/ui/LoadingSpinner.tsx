import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-4">
      <Loader2 className="animate-spin text-royal-900" size={48} />
      <p className="text-royal-600 font-medium text-sm animate-pulse tracking-widest uppercase">Loading...</p>
    </div>
  );
}
