
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { PageTransition } from "../components/ui/Transitions";
import { 
  Calculator, 
  Plus, 
  Calendar, 
  ArrowUpRight, 
  FileText, 
  BarChart, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const Taxes: React.FC = () => {
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Tax Management</h1>
                <p className="text-muted-foreground mt-1">
                  Optimize your tax strategy and ensure compliance.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                  <Calendar size={18} className="mr-2" />
                  Tax Calendar
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors">
                  <Calculator size={18} className="mr-2" />
                  Run Tax Analysis
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Tax Savings Insights</h2>
                <span className="text-sm text-muted-foreground">Updated 2 hours ago</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Potential Tax Savings</p>
                      <h3 className="text-2xl font-bold text-primary">$12,485</h3>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10">
                      <ArrowUpRight size={20} className="text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm">Implement our recommended strategies to realize these savings.</p>
                  <button className="mt-4 inline-flex items-center text-sm text-primary font-medium hover:underline">
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="p-5 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current Tax Rate</p>
                      <h3 className="text-2xl font-bold">24.3%</h3>
                    </div>
                    <div className="p-2 rounded-full bg-secondary">
                      <BarChart size={20} className="text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm">Your effective tax rate for the current fiscal year.</p>
                  <button className="mt-4 inline-flex items-center text-sm text-primary font-medium hover:underline">
                    Projection Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="p-5 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Next Filing Due</p>
                      <h3 className="text-2xl font-bold">Oct 15, 2023</h3>
                    </div>
                    <div className="p-2 rounded-full bg-secondary">
                      <Calendar size={20} className="text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm">Quarterly estimated tax payment deadline.</p>
                  <button className="mt-4 inline-flex items-center text-sm text-primary font-medium hover:underline">
                    Tax Calendar
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold">Tax-Saving Opportunities</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    AI-recommended strategies based on your financial data.
                  </p>
                </div>
                
                <div className="p-4">
                  {[
                    {
                      title: "Business Equipment Purchase",
                      description: "Purchase new equipment before year-end to take advantage of Section 179 deduction.",
                      savings: "$8,200",
                      impact: "High",
                      timeline: "Before Dec 31",
                    },
                    {
                      title: "Retirement Contributions",
                      description: "Maximize contributions to your SEP IRA to reduce taxable income.",
                      savings: "$3,650",
                      impact: "Medium",
                      timeline: "Any time this year",
                    },
                    {
                      title: "Home Office Deduction",
                      description: "Properly document and claim home office expenses.",
                      savings: "$1,825",
                      impact: "Medium",
                      timeline: "During tax filing",
                    },
                    {
                      title: "Vehicle Expense Method",
                      description: "Switch from standard mileage to actual expense method for higher deduction.",
                      savings: "$935",
                      impact: "Low",
                      timeline: "During tax filing",
                    },
                  ].map((opportunity, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg border border-border mb-3 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-3 md:mb-0">
                          <h3 className="text-base font-medium">{opportunity.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {opportunity.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-semibold text-green-600">
                            {opportunity.savings}
                          </span>
                          <span className="text-xs text-muted-foreground">Potential Savings</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          opportunity.impact === "High" 
                            ? "bg-green-100 text-green-800" 
                            : opportunity.impact === "Medium"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {opportunity.impact} Impact
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                          {opportunity.timeline}
                        </span>
                      </div>
                      
                      <div className="mt-3 flex justify-end">
                        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                          Implement Strategy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-border text-center">
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                    View All Opportunities
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold">Tax Filing Status</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Track upcoming and past tax filings.
                  </p>
                </div>
                
                <div className="p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Upcoming Filings</h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: "Q3 Estimated Tax Payment",
                            dueDate: "Sep 15, 2023",
                            status: "Not Started",
                          },
                          {
                            name: "Q4 Estimated Tax Payment",
                            dueDate: "Jan 15, 2024",
                            status: "Not Started",
                          },
                        ].map((filing, index) => (
                          <div 
                            key={index} 
                            className="p-3 rounded-lg border border-border flex justify-between items-center"
                          >
                            <div>
                              <p className="text-sm font-medium">{filing.name}</p>
                              <p className="text-xs text-muted-foreground">Due: {filing.dueDate}</p>
                            </div>
                            <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                              {filing.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Completed Filings</h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: "Q2 Estimated Tax Payment",
                            dueDate: "Jun 15, 2023",
                            status: "Completed",
                            amount: "$2,450.00",
                          },
                          {
                            name: "Q1 Estimated Tax Payment",
                            dueDate: "Apr 15, 2023",
                            status: "Completed",
                            amount: "$2,300.00",
                          },
                          {
                            name: "Annual Tax Return (2022)",
                            dueDate: "Apr 15, 2023",
                            status: "Completed",
                            amount: "$14,575.00",
                          },
                        ].map((filing, index) => (
                          <div 
                            key={index} 
                            className="p-3 rounded-lg border border-border flex justify-between items-center"
                          >
                            <div>
                              <p className="text-sm font-medium">{filing.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Filed: {filing.dueDate} • {filing.amount}
                              </p>
                            </div>
                            <span className="flex items-center px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              <CheckCircle2 size={12} className="mr-1" />
                              {filing.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-accent/20 mr-3">
                        <FileText size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Tax Document Storage</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          All your tax documents are securely stored and organized for easy access during audits.
                        </p>
                        <button className="mt-2 text-xs text-primary hover:underline">
                          View Documents
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Taxes;
