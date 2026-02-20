import React, { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient"; 
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Loader2 } from "lucide-react";

import NotFound from "./pages/not-found";
import Home from "./pages/Home";

// Lazy load heavy route components to improve initial load performance
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const DigitalBinder = lazy(() => import("./pages/DigitalBinder"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/:tab" component={Dashboard} />
      <Route path="/binder" component={DigitalBinder} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <Loader2 className="h-10 w-10 animate-spin text-royal-900/20" />
          </div>
        }>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
