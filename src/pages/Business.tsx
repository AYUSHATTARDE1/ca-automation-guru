
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { PageTransition } from "../components/ui/Transitions";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Zap,
  TrendingUp,
  Users,
  Target,
  ChevronRight,
  FileText,
  PieChart as PieChartIcon,
  BarChart2,
  UserPlus,
  ChevronDown,
  Filter,
} from "lucide-react";

const Business: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data
  const customerSegments = [
    { name: "Enterprise", value: 40 },
    { name: "Mid-Market", value: 30 },
    { name: "Small Business", value: 20 },
    { name: "Startup", value: 10 },
  ];

  const salesFunnel = [
    { name: "Leads", value: 1200 },
    { name: "Qualified", value: 850 },
    { name: "Proposal", value: 420 },
    { name: "Negotiation", value: 180 },
    { name: "Closed", value: 120 },
  ];

  const marketTrends = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 60 },
    { month: "Apr", value: 65 },
    { month: "May", value: 60 },
    { month: "Jun", value: 70 },
    { month: "Jul", value: 75 },
    { month: "Aug", value: 80 },
    { month: "Sep", value: 85 },
    { month: "Oct", value: 90 },
    { month: "Nov", value: 95 },
    { month: "Dec", value: 100 },
  ];

  const competitorComparison = [
    { name: "Your Company", revenue: 85, growth: 75, market: 65 },
    { name: "Competitor A", revenue: 65, growth: 85, market: 70 },
    { name: "Competitor B", revenue: 75, growth: 65, market: 60 },
    { name: "Competitor C", revenue: 55, growth: 45, market: 50 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-white shadow-lg border border-border rounded-lg">
          <p className="font-medium text-sm">{label || payload[0].name}</p>
          <p className="text-sm">
            <span className="text-primary">{payload[0].value}</span>
            {payload[0].unit ? ` ${payload[0].unit}` : ""}
          </p>
        </div>
      );
    }
    return null;
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
                <h1 className="text-3xl font-bold tracking-tight">Business Intelligence</h1>
                <p className="text-muted-foreground mt-1">
                  Market insights and growth opportunities for your business.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                <div className="relative">
                  <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                    This Quarter
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                </div>
                
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors">
                  <FileText size={18} className="mr-2" />
                  Generate Report
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Market Growth",
                  value: "12.8%",
                  change: "+3.2%",
                  trend: "up",
                  description: "Year-over-year",
                  icon: <TrendingUp className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Customer Acquisition",
                  value: "485",
                  change: "+15%",
                  trend: "up",
                  description: "Last 30 days",
                  icon: <UserPlus className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Customer Retention",
                  value: "92.5%",
                  change: "+2.3%",
                  trend: "up",
                  description: "Month-over-month",
                  icon: <Users className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Avg. Deal Size",
                  value: "$12,450",
                  change: "-5.5%",
                  trend: "down",
                  description: "Quarter-over-quarter",
                  icon: <Target className="h-6 w-6 text-primary" />,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <div className="flex items-center mt-1">
                        <span className={`text-sm font-medium ${
                          stat.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      <PieChartIcon size={18} className="text-primary mr-2" />
                      <h2 className="text-lg font-semibold">Customer Segments</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Distribution by business size
                    </p>
                  </div>
                </div>
                
                <div className="h-64 mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={customerSegments}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {customerSegments.map((entry, index) => (
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
                  {customerSegments.map((entry, index) => (
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
                
                <button className="mt-6 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                  View Customer Analysis
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      <Filter size={18} className="text-primary mr-2" />
                      <h2 className="text-lg font-semibold">Sales Funnel</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Conversion through stages
                    </p>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salesFunnel}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
                      <XAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="value"
                        fill="hsl(var(--accent))"
                        radius={[0, 4, 4, 0]}
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">Conversion Rate: </span>
                    <span className="font-bold">10.0%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                
                <button className="mt-6 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                  Optimize Sales Funnel
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      <BarChart2 size={18} className="text-primary mr-2" />
                      <h2 className="text-lg font-semibold">Market Trends</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Industry growth indicators
                    </p>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={marketTrends}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} />
                      <YAxis
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}`}
                        axisLine={false}
                        tickLine={false}
                        opacity={0.5}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(var(--primary))" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="px-3 py-2 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-xs text-muted-foreground">YoY Growth</p>
                    <p className="text-sm font-bold">+15.3%</p>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-xs text-muted-foreground">Market Size</p>
                    <p className="text-sm font-bold">$4.2B</p>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-xs text-muted-foreground">Forecast</p>
                    <p className="text-sm font-bold">Positive</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Competitor Analysis</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Compare your performance against key competitors
                  </p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50 text-sm text-muted-foreground">
                    <tr>
                      <th className="px-6 py-3 text-left">Company</th>
                      <th className="px-6 py-3 text-left">Revenue</th>
                      <th className="px-6 py-3 text-left">Growth Rate</th>
                      <th className="px-6 py-3 text-left">Market Share</th>
                      <th className="px-6 py-3 text-left">Strengths</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        name: "Your Company",
                        revenue: "$4.5M",
                        growth: "+18%",
                        market: "14%",
                        strengths: ["Customer Experience", "Product Innovation"],
                        isYou: true,
                      },
                      {
                        name: "Competitor A",
                        revenue: "$6.2M",
                        growth: "+12%",
                        market: "22%",
                        strengths: ["Market Reach", "Pricing Strategy"],
                      },
                      {
                        name: "Competitor B",
                        revenue: "$3.8M",
                        growth: "+5%",
                        market: "11%",
                        strengths: ["Brand Recognition", "Customer Loyalty"],
                      },
                      {
                        name: "Competitor C",
                        revenue: "$2.5M",
                        growth: "+22%",
                        market: "8%",
                        strengths: ["Product Quality", "Innovation Speed"],
                      },
                    ].map((competitor, i) => (
                      <tr 
                        key={i}
                        className={`hover:bg-secondary/30 transition-colors ${
                          competitor.isYou ? "bg-secondary/20" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="font-medium">{competitor.name}</span>
                            {competitor.isYou && (
                              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                                You
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">{competitor.revenue}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{competitor.growth}</td>
                        <td className="px-6 py-4">{competitor.market}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-2">
                            {competitor.strengths.map((strength, j) => (
                              <span 
                                key={j} 
                                className="px-2 py-1 text-xs rounded-full bg-secondary"
                              >
                                {strength}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-accent/20 mr-3">
                    <Zap size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Strategic Insight</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your growth rate outperforms the competition, but Competitor A maintains a stronger market position. 
                      Consider focusing on expanding market reach while maintaining your innovation advantage.
                    </p>
                    <button className="mt-2 text-xs text-primary hover:underline">
                      View Detailed Competitive Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-border shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">AI-Powered Growth Opportunities</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Personalized insights based on your business data and market trends
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Enterprise Client Expansion",
                    description: "Your enterprise segment shows 24% higher profitability. Shifting 10% more focus to this segment could increase overall revenue by 15%.",
                    action: "Develop Enterprise Strategy",
                    priority: "High",
                  },
                  {
                    title: "Product Bundle Opportunity",
                    description: "Customers who purchase both your core product and support services spend 3.5x more. Consider creating bundled offerings.",
                    action: "Create Service Bundles",
                    priority: "Medium",
                  },
                  {
                    title: "Regional Expansion",
                    description: "Market analysis shows the Northeast region has 40% lower competition but similar customer demographics to your current markets.",
                    action: "Explore Northeast Market",
                    priority: "Medium",
                  },
                  {
                    title: "Pricing Optimization",
                    description: "Your current pricing is 15% below market rate for comparable services, with no negative impact on customer acquisition.",
                    action: "Review Pricing Strategy",
                    priority: "High",
                  },
                ].map((opportunity, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-lg border border-border hover:bg-secondary/20 transition-colors"
                  >
                    <h3 className="text-base font-medium">{opportunity.title}</h3>
                    <div className="mt-1 mb-3">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        opportunity.priority === "High" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {opportunity.priority} Priority
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {opportunity.description}
                    </p>
                    <button className="mt-4 inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                      {opportunity.action}
                    </button>
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

export default Business;
