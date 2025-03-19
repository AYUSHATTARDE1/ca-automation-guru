
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { PageTransition } from "../components/ui/Transitions";
import { FileText, Plus, Filter, MoreHorizontal, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const Accounting: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const transactions = [
    {
      id: "TX-3842",
      date: "2023-07-28",
      description: "Adobe Creative Cloud",
      category: "Software Subscription",
      amount: "-$52.99",
      status: "Categorized",
    },
    {
      id: "TX-3841",
      date: "2023-07-27",
      description: "Client Payment - XYZ Corp",
      category: "Sales Revenue",
      amount: "+$3,250.00",
      status: "Categorized",
    },
    {
      id: "TX-3840",
      date: "2023-07-26",
      description: "Office Supplies - Staples",
      category: "Office Expenses",
      amount: "-$124.50",
      status: "Pending",
    },
    {
      id: "TX-3839",
      date: "2023-07-25",
      description: "Freelance Design Services",
      category: "Professional Services",
      amount: "-$750.00",
      status: "Needs Review",
    },
    {
      id: "TX-3838",
      date: "2023-07-25",
      description: "Client Payment - ABC Inc",
      category: "Sales Revenue",
      amount: "+$5,700.00",
      status: "Categorized",
    },
    {
      id: "TX-3837",
      date: "2023-07-24",
      description: "AWS Cloud Services",
      category: "Hosting & Infrastructure",
      amount: "-$324.75",
      status: "Categorized",
    },
    {
      id: "TX-3836",
      date: "2023-07-23",
      description: "Conference Registration",
      category: "Professional Development",
      amount: "-$899.00",
      status: "Needs Review",
    },
    {
      id: "TX-3835",
      date: "2023-07-22",
      description: "Uber Rides",
      category: "Travel Expenses",
      amount: "-$42.50",
      status: "Pending",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Categorized":
        return <CheckCircle2 size={16} className="text-green-500" />;
      case "Needs Review":
        return <AlertCircle size={16} className="text-red-500" />;
      case "Pending":
        return <Clock size={16} className="text-amber-500" />;
      default:
        return null;
    }
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
                <h1 className="text-3xl font-bold tracking-tight">Accounting</h1>
                <p className="text-muted-foreground mt-1">
                  Manage your transactions, accounts, and financial entries.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                  <FileText size={18} className="mr-2" />
                  Generate Reports
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors">
                  <Plus size={18} className="mr-2" />
                  Add Transaction
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Income</p>
                  <h3 className="text-2xl font-bold text-green-600">$14,532.75</h3>
                  <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
                  <h3 className="text-2xl font-bold text-red-600">$7,842.92</h3>
                  <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Net Profit</p>
                  <h3 className="text-2xl font-bold">$6,689.83</h3>
                  <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Pending Transactions</p>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-xs text-muted-foreground mt-1">Needs Review</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-lg font-semibold">Recent Transactions</h2>
                  
                  <div className="mt-3 sm:mt-0 flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full sm:w-64 px-3 py-2 pr-8 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center px-3 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors">
                      <Filter size={16} className="mr-2" />
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50 text-sm text-muted-foreground">
                    <tr>
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">Date</th>
                      <th className="px-6 py-3 text-left">Description</th>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-right">Amount</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {transactions.map((transaction) => (
                      <tr 
                        key={transaction.id}
                        className="hover:bg-secondary/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium">
                          {transaction.id}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-2 py-1 text-xs rounded-full bg-secondary">
                            {transaction.category}
                          </span>
                        </td>
                        <td className={`px-6 py-4 text-sm font-medium text-right ${
                          transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                        }`}>
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center">
                            {getStatusIcon(transaction.status)}
                            <span className="ml-2">{transaction.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          <button className="p-1 rounded-full hover:bg-secondary transition-colors">
                            <MoreHorizontal size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-border flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing 1 to 8 of 235 transactions
                </p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm rounded-md border border-border hover:bg-secondary transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-sm rounded-md border border-border bg-primary text-white hover:bg-primary/90 transition-colors">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm rounded-md border border-border hover:bg-secondary transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1 text-sm rounded-md border border-border hover:bg-secondary transition-colors">
                    3
                  </button>
                  <button className="px-3 py-1 text-sm rounded-md border border-border hover:bg-secondary transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Accounting;
