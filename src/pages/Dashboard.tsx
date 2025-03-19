
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../components/ui/Transitions";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Overview from "../components/dashboard/Overview";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <PageTransition>
        <main
          className={`pt-24 pb-12 transition-all duration-300 ${
            isSidebarOpen ? "pl-64" : "pl-0"
          }`}
        >
          <div className="px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's an overview of your financial performance.
              </p>
            </div>
            
            <Overview />
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Dashboard;
