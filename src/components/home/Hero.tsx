
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, BarChart, Zap, FileText, Calculator } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/30 text-primary text-sm font-medium mb-6">
              <Zap size={16} className="mr-1" />
              <span>AI-Powered Financial Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Transform Your</span>
              <span className="text-gradient">Financial Management</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              Eliminate manual processes with our advanced AI-powered platform. 
              Automate accounting, optimize taxes, and unlock real-time insights 
              for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/dashboard" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-200"
              >
                Get Started Now
                <ChevronRight size={16} className="ml-1" />
              </Link>
              
              <a 
                href="#features" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-medium text-primary bg-secondary hover:bg-secondary/70 rounded-full transition-colors duration-200"
              >
                Explore Features
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-secondary">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <FileText size={18} className="text-accent-foreground mr-2" />
                  <span className="text-sm font-medium">Automated Bookkeeping</span>
                </div>
                <div className="flex items-center">
                  <Calculator size={18} className="text-accent-foreground mr-2" />
                  <span className="text-sm font-medium">Tax Optimization</span>
                </div>
                <div className="flex items-center">
                  <BarChart size={18} className="text-accent-foreground mr-2" />
                  <span className="text-sm font-medium">AI Financial Insights</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Abstract colored background shapes */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full bg-accent/40 blur-3xl"></div>
              <div className="absolute bottom-1/3 left-1/3 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl"></div>
              
              {/* Dashboard mockup */}
              <div className="relative z-10 w-full h-full max-w-md rounded-2xl overflow-hidden shadow-elegant-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40"></div>
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">Financial Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time insights</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-white shadow-sm border border-border">
                      <div className="text-sm text-muted-foreground mb-1">Revenue</div>
                      <div className="text-xl font-bold">$84,215</div>
                      <div className="mt-2 text-xs text-green-500 flex items-center">
                        +12.5% <span className="ml-1">↑</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white shadow-sm border border-border">
                      <div className="text-sm text-muted-foreground mb-1">Expenses</div>
                      <div className="text-xl font-bold">$34,185</div>
                      <div className="mt-2 text-xs text-red-500 flex items-center">
                        -3.2% <span className="ml-1">↓</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex-1">
                    <div className="h-full rounded-lg bg-white shadow-sm border border-border p-4">
                      <div className="text-sm font-medium mb-3">Cash Flow Trends</div>
                      <div className="relative h-[60%]">
                        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end space-x-2">
                          <div style={{height: '65%'}} className="flex-1 bg-primary/10 rounded-t-sm"></div>
                          <div style={{height: '80%'}} className="flex-1 bg-primary/20 rounded-t-sm"></div>
                          <div style={{height: '50%'}} className="flex-1 bg-primary/10 rounded-t-sm"></div>
                          <div style={{height: '90%'}} className="flex-1 bg-accent rounded-t-sm"></div>
                          <div style={{height: '70%'}} className="flex-1 bg-primary/20 rounded-t-sm"></div>
                          <div style={{height: '85%'}} className="flex-1 bg-primary/30 rounded-t-sm"></div>
                          <div style={{height: '75%'}} className="flex-1 bg-primary/20 rounded-t-sm"></div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute z-20 -left-8 top-16 p-4 rounded-lg glass shadow-elegant"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-accent/30">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Invoice Generated</div>
                    <div className="text-xs text-muted-foreground">Invoice #2305</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute z-20 -right-6 bottom-24 p-4 rounded-lg glass shadow-elegant"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Zap size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Tax Saved</div>
                    <div className="text-xs text-muted-foreground">$4,325</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
