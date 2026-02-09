import React from 'react';
import { useParams } from 'wouter';

interface DashboardParams {
  tab?: string;
}

function Dashboard() {
  const params = useParams<DashboardParams>();
  const activeTab = params.tab || 'overview'; // Default to 'overview' if no tab is specified

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-serif font-bold text-royal-900 mb-4">Dashboard</h1>
        <p className="text-lg text-slate-700">You are currently viewing the <span className="font-bold text-gold-600">{activeTab}</span> tab.</p>
        <p className="mt-4 text-md text-slate-500">This is a placeholder for future dashboard functionality.</p>
      </div>
    </div>
  );
}

export default Dashboard;
