
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, DollarSign, CreditCard, FileText, TrendingUp } from "lucide-react";

const Overview: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample data
  const revenueData = [
    { name: "Jan", value: 35000 },
    { name: "Feb", value: 28000 },
    { name: "Mar", value: 42000 },
    { name: "Apr", value: 45000 },
    { name: "May", value: 38000 },
    { name: "Jun", value: 52000 },
    { name: "Jul", value: 58000 },
  ];

  const expenseData = [
    { name: "Jan", value: 25000 },
    { name: "Feb", value: 22000 },
    { name: "Mar", value: 30000 },
    { name: "Apr", value: 28000 },
    { name: "May", value: 32000 },
    { name: "Jun", value: 34000 },
    { name: "Jul", value: 36000 },
  ];

  const pieChartData = [
    { name: "Sales", value: 45 },
    { name: "Marketing", value: 15 },
    { name: "Operations", value: 25 },
    { name: "Admin", value: 15 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

  const stats = [
    {
      title: "Total Revenue",
      value: "$84,215",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
    },
    {
      title: "Total Expenses",
      value: "$34,185",
      change: "-3.2%",
      trend: "down",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
    },
    {
      title: "Invoices Due",
      value: "$12,425",
      change: "+5.7%",
      trend: "up",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
      title: "Profit Margin",
      value: "58.4%",
      change: "+2.3%",
      trend: "up",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Financial Overview</h2>
        <div className="mt-2 md:mt-0">
          <div className="inline-flex items-center rounded-lg border border-input bg-transparent p-1">
            {["week", "month", "quarter", "year"].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1.5 text-sm transition-colors rounded-md ${
                  selectedPeriod === period
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white border border-border shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <div className="flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-green-500 ml-1">{stat.change}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium text-red-500 ml-1">{stat.change}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-secondary">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-white border border-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium">Revenue vs. Expenses</h3>
              <p className="text-sm text-muted-foreground">
                Comparison of monthly revenue and expenses
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex space-x-2">
              <div className="flex items-center text-xs">
                <div className="w-3 h-3 rounded-full bg-primary/80 mr-1"></div>
                <span>Revenue</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="w-3 h-3 rounded-full bg-accent mr-1"></div>
                <span>Expenses</span>
              </div>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData.map((item, index) => ({
                  name: item.name,
                  revenue: item.value,
                  expenses: expenseData[index].value,
                }))}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary) / 0.3)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--primary) / 0.3)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent) / 0.5)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--accent) / 0.5)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  tickFormatter={(value) => `$${value / 1000}k`}
                  axisLine={false}
                  tickLine={false}
                  opacity={0.5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="hsl(var(--accent))"
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Expense Breakdown</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Distribution of expenses by category
          </p>

          <div className="h-64 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
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

          <div className="grid grid-cols-2 gap-2 mt-4">
            {pieChartData.map((entry, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-xs">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Cash Flow</h3>
          <p className="text-sm text-muted-foreground mb-6">Net cash flow by month</p>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData.map((item, index) => ({
                  name: item.name,
                  cashFlow: item.value - expenseData[index].value,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  tickFormatter={(value) => `$${value / 1000}k`}
                  axisLine={false}
                  tickLine={false}
                  opacity={0.5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="cashFlow"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  fill="hsl(var(--accent))"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Latest financial activities
          </p>

          <div className="space-y-4">
            {[
              {
                name: "Adobe Creative Cloud",
                type: "Subscription",
                date: "Jul 28, 2023",
                amount: "-$52.99",
                status: "expense",
              },
              {
                name: "Client Payment - XYZ Corp",
                type: "Invoice #1082",
                date: "Jul 27, 2023",
                amount: "+$3,250.00",
                status: "income",
              },
              {
                name: "Office Supplies",
                type: "Expenses",
                date: "Jul 26, 2023",
                amount: "-$124.50",
                status: "expense",
              },
              {
                name: "Client Payment - ABC Inc",
                type: "Invoice #1081",
                date: "Jul 25, 2023",
                amount: "+$5,700.00",
                status: "income",
              },
              {
                name: "Server Hosting",
                type: "Subscription",
                date: "Jul 24, 2023",
                amount: "-$89.99",
                status: "expense",
              },
            ].map((transaction, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      transaction.status === "income"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    {transaction.status === "income" ? (
                      <ArrowUpRight className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.type} • {transaction.date}
                    </p>
                  </div>
                </div>
                <p
                  className={`font-medium ${
                    transaction.status === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button className="text-sm text-primary hover:text-primary/80 transition-colors">
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
