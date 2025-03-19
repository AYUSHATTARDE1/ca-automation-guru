
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Receipt,
  Calculator,
  BarChart3,
  TrendingUp,
  Settings,
  HelpCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, to, isActive }) => {
  return (
    <Link to={to}>
      <motion.div
        className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 group ${
          isActive
            ? "bg-primary text-white"
            : "hover:bg-secondary text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={20} className={isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"} />
        <span className="ml-3 font-medium">{label}</span>
        {isActive && (
          <motion.div
            className="ml-auto"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={16} />
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
    { icon: FileText, label: "Accounting", to: "/accounting" },
    { icon: Receipt, label: "Invoices", to: "/invoices" },
    { icon: Calculator, label: "Taxes", to: "/taxes" },
    { icon: BarChart3, label: "Analytics", to: "/analytics" },
    { icon: TrendingUp, label: "Business", to: "/business" },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Error signing out");
        return;
      }
      toast.success("Signed out successfully");
      navigate("/auth");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error signing out");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed left-0 top-0 z-30 h-screen w-64 bg-white pt-20 pb-6 px-3 shadow-elegant overflow-y-auto hide-scrollbar"
        >
          <nav className="flex flex-col space-y-2 mt-6">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isActive={currentPath === item.to}
              />
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="px-4 mb-6">
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <HelpCircle size={18} className="text-primary" />
                  </div>
                  <h5 className="font-medium">Need Help?</h5>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact our support team for assistance with any issues.
                </p>
                <button className="mt-3 w-full py-2 text-xs font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>

            <div className="border-t border-border pt-6 px-4">
              <NavItem
                icon={Settings}
                label="Settings"
                to="/settings"
                isActive={currentPath === "/settings"}
              />
              <Button 
                variant="ghost" 
                className="w-full justify-start px-4 py-3 my-1 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut size={20} className="mr-3" />
                <span className="font-medium">Log Out</span>
              </Button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
