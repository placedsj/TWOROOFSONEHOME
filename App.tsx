import React, { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient"; 
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import Home from "./pages/Home.tsx";

const NotFound = lazy(() => import("./pages/not-found.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const DigitalBinder = lazy(() => import("./pages/DigitalBinder.tsx"));

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
        <Suspense fallback={<LoadingSpinner />}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
