
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { PageTransition } from "../components/ui/Transitions";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, Calendar, Filter, BarChart2, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";

const Analytics: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("6m");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data
  const revenueData = [
    { month: "Jan", value: 35000 },
    { month: "Feb", value: 28000 },
    { month: "Mar", value: 42000 },
    { month: "Apr", value: 45000 },
    { month: "May", value: 38000 },
    { month: "Jun", value: 52000 },
    { month: "Jul", value: 58000 },
    { month: "Aug", value: 62000 },
    { month: "Sep", value: 48000 },
    { month: "Oct", value: 53000 },
    { month: "Nov", value: 59000 },
    { month: "Dec", value: 65000 },
  ];

  const expenseCategories = [
    { name: "Salaries", value: 45 },
    { name: "Marketing", value: 15 },
    { name: "Operations", value: 25 },
    { name: "Admin", value: 15 },
  ];

  const profitMarginTrend = [
    { month: "Jan", value: 35 },
    { month: "Feb", value: 32 },
    { month: "Mar", value: 38 },
    { month: "Apr", value: 40 },
    { month: "May", value: 35 },
    { month: "Jun", value: 42 },
    { month: "Jul", value: 45 },
    { month: "Aug", value: 48 },
    { month: "Sep", value: 43 },
    { month: "Oct", value: 46 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 53 },
  ];

  const channelRevenue = [
    { name: "Direct Sales", value: 45000 },
    { name: "Online Store", value: 35000 },
    { name: "Partners", value: 25000 },
    { name: "Affiliates", value: 15000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  // Formatter for currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-white shadow-lg border border-border rounded-lg">
          <p className="font-medium text-sm">{label}</p>
          <p className="text-sm">
            <span className="text-primary">{formatCurrency(payload[0].value)}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const percentFormatter = (value: number) => `${value}%`;

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
                <h1 className="text-3xl font-bold tracking-tight">Financial Analytics</h1>
                <p className="text-muted-foreground mt-1">
                  AI-driven insights to optimize your financial performance.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="inline-flex items-center rounded-lg border border-input bg-transparent p-1">
                  {[
                    { value: "1m", label: "1M" },
                    { value: "3m", label: "3M" },
                    { value: "6m", label: "6M" },
                    { value: "1y", label: "1Y" },
                    { value: "all", label: "All" },
                  ].map((period) => (
                    <button
                      key={period.value}
                      onClick={() => setSelectedPeriod(period.value)}
                      className={`px-3 py-1.5 text-sm transition-colors rounded-md ${
                        selectedPeriod === period.value
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
                
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                  <Download size={18} className="mr-2" />
                  Export Report
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl border border-border shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold">Revenue Trend</h2>
                    <p className="text-sm text-muted-foreground">
                      Monthly revenue over the selected period
                    </p>
                  </div>
                  
                  <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                    <button className="inline-flex items-center px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-secondary transition-colors">
                      <Filter size={16} className="mr-2" />
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={revenueData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary) / 0.3)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(var(--primary) / 0.3)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis
                        tickFormatter={(value) => `$${value / 1000}k`}
                        axisLine={false}
                        tickLine={false}
                        opacity={0.5}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-xl font-bold">$585,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Monthly</p>
                    <p className="text-xl font-bold">$48,750</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-green-500 mr-1" />
                      <p className="text-xl font-bold text-green-500">+18.2%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Forecast (Next Month)</p>
                    <p className="text-xl font-bold">$68,500</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-1">Expense Breakdown</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Distribution by category
                </p>
                
                <div className="h-64 mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Percentage"]}
                        contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {expenseCategories.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div>
                        <span className="text-sm">{entry.name}</span>
                        <span className="text-xs text-muted-foreground ml-1">({entry.value}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full text-sm text-primary hover:text-primary/80 transition-colors">
                  View Detailed Breakdown
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-1">Profit Margin Trend</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Monthly profit margin percentage
                </p>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={profitMarginTrend}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis
                        tickFormatter={percentFormatter}
                        axisLine={false}
                        tickLine={false}
                        opacity={0.5}
                      />
                      <Tooltip
                        formatter={(value: any) => [`${value}%`, "Profit Margin"]}
                        contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--accent))"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(var(--accent))" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Average</p>
                    <p className="text-xl font-bold">42.3%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Change</p>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-green-500 mr-1" />
                      <p className="text-xl font-bold text-green-500">+5.1%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Industry Avg</p>
                    <p className="text-xl font-bold">31.5%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-1">Revenue by Channel</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Distribution of revenue across sales channels
                </p>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelRevenue}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
                      <XAxis
                        type="number"
                        tickFormatter={(value) => `$${value / 1000}k`}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        formatter={(value: any) => [formatCurrency(value), "Revenue"]}
                        contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))" }}
                      />
                      <Bar
                        dataKey="value"
                        fill="hsl(var(--primary) / 0.7)"
                        radius={[0, 4, 4, 0]}
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {channelRevenue.map((entry, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/30 border border-border">
                      <p className="text-sm font-medium">{entry.name}</p>
                      <p className="text-lg font-bold mt-1">{formatCurrency(entry.value)}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.round((entry.value / channelRevenue.reduce((acc, curr) => acc + curr.value, 0)) * 100)}% of total
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">AI-Generated Insights</h2>
                  <p className="text-sm text-muted-foreground">
                    Automated analysis of your financial performance
                  </p>
                </div>
                
                <div className="mt-2 sm:mt-0">
                  <button className="inline-flex items-center px-3 py-1.5 text-sm rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors">
                    <BarChart2 size={16} className="mr-2" />
                    Generate Custom Analysis
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Revenue Growth Acceleration",
                    description: "Your revenue growth rate has increased from 8.5% to 18.2% over the last quarter, primarily driven by increased sales in the 'Professional Services' category.",
                    icon: <TrendingUp size={20} className="text-green-500" />,
                    impact: "Positive",
                  },
                  {
                    title: "Expense Optimization Opportunity",
                    description: "Marketing expenses have increased by 35% while only generating a 12% increase in customer acquisition. Consider optimizing your marketing spend for better ROI.",
                    icon: <TrendingDown size={20} className="text-amber-500" />,
                    impact: "Attention",
                  },
                  {
                    title: "Cash Flow Forecast",
                    description: "Based on current trends, your Q4 cash flow is projected to increase by 22%, potentially giving you an opportunity to reinvest in growth initiatives.",
                    icon: <TrendingUp size={20} className="text-green-500" />,
                    impact: "Positive",
                  },
                  {
                    title: "Industry Comparison",
                    description: "Your profit margin of 42.3% is significantly higher than the industry average of 31.5%, positioning you in the top 15% of companies in your sector.",
                    icon: <TrendingUp size={20} className="text-green-500" />,
                    impact: "Positive",
                  },
                ].map((insight, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-lg border border-border hover:bg-secondary/20 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${
                        insight.impact === "Positive" 
                          ? "bg-green-100" 
                          : insight.impact === "Attention"
                          ? "bg-amber-100"
                          : "bg-red-100"
                      } mr-3`}>
                        {insight.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-medium">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {insight.description}
                        </p>
                        <button className="mt-3 inline-flex items-center text-sm text-primary font-medium hover:underline">
                          View Detailed Analysis
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
};

export default Analytics;
