
import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../ui/Transitions";
import {
  Receipt,
  FileText,
  Calculator,
  PieChart,
  TrendingUp,
  Wallet,
  Landmark,
  ShieldCheck,
  BarChart,
  Zap,
  Bot,
  ChevronRight,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -3px rgba(0, 0, 0, 0.05)" }}
      className="p-6 rounded-2xl bg-white border border-border transition-all duration-300"
    >
      <div className="mb-4 p-3 rounded-lg bg-secondary inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <FileText size={24} className="text-primary" />,
      title: "Auto-Bookkeeping",
      description:
        "Automatically categorize transactions, maintain ledgers, and reconcile accounts with AI precision.",
    },
    {
      icon: <Receipt size={24} className="text-primary" />,
      title: "Invoice Generation",
      description:
        "Create, send, and track invoices with automated reminders and payment tracking.",
    },
    {
      icon: <Calculator size={24} className="text-primary" />,
      title: "Tax Optimization",
      description:
        "Auto-generate tax reports and discover tax-saving strategies tailored to your business.",
    },
    {
      icon: <PieChart size={24} className="text-primary" />,
      title: "Financial Statements",
      description:
        "Generate balance sheets, profit/loss statements, and cash flow reports in seconds.",
    },
    {
      icon: <BarChart size={24} className="text-primary" />,
      title: "Real-Time Analytics",
      description:
        "Get deep insights into profit, loss, and cash flow trends with intuitive visualizations.",
    },
    {
      icon: <TrendingUp size={24} className="text-primary" />,
      title: "Business Intelligence",
      description:
        "Market trend analysis and customer segmentation to optimize your business strategy.",
    },
    {
      icon: <Wallet size={24} className="text-primary" />,
      title: "Multi-Currency Support",
      description:
        "Handle international transactions and exchange rates seamlessly for global business.",
    },
    {
      icon: <Landmark size={24} className="text-primary" />,
      title: "GST & VAT Handling",
      description:
        "Manage indirect taxes and ensure proper invoicing with complete tax compliance.",
    },
    {
      icon: <ShieldCheck size={24} className="text-primary" />,
      title: "Audit-Ready Reports",
      description:
        "Ensure compliance with financial regulations and make audits hassle-free.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Everything You Need to Automate Your Finances
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our platform brings together cutting-edge AI technology with financial expertise to deliver a complete solution for businesses of all sizes.
            </p>
          </motion.div>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 rounded-2xl bg-white border border-border shadow-elegant-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent/20 mr-3">
                  <Bot size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Platform</h3>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                The Smartest Financial Assistant for Your Business
              </h4>
              <p className="text-muted-foreground mb-6">
                Our AI goes beyond basic automation. It learns from your business patterns, provides strategic insights, and makes proactive recommendations to optimize your financial operations.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Predictive financial modeling",
                  "Personalized financial advice",
                  "Automated error detection",
                  "Smart contract drafting",
                  "Continuous learning from your data",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-accent">
                      <Zap size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center px-4 py-2 font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                Learn More
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative z-10 p-6 rounded-xl bg-white border border-border shadow-elegant overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 opacity-70"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold">AI Recommendations</h4>
                    <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-primary rounded-full">New</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Optimize Cash Flow",
                        description: "Adjust payment terms to improve cash flow by 15%",
                        icon: <TrendingUp size={16} />,
                      },
                      {
                        title: "Tax Saving Opportunity",
                        description: "New equipment purchase can save $8,200 in taxes",
                        icon: <Calculator size={16} />,
                      },
                      {
                        title: "Invoice Reminder",
                        description: "Send reminder for invoice #1082 (5 days overdue)",
                        icon: <Receipt size={16} />,
                      },
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="p-3 rounded-lg border border-border bg-white/50 hover:bg-white transition-colors cursor-pointer"
                      >
                        <div className="flex items-start">
                          <div className="p-2 mr-3 rounded-full bg-primary/10 text-primary">
                            {item.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">{item.title}</h5>
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                      View All Recommendations
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
