import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <Loader2 className="h-8 w-8 animate-spin text-gold-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
