
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BarChart, Cloud } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-primary text-white p-2 rounded-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold">CA AI Platform</h1>
        </div>
        <div className="space-x-4">
          {!loading && !session ? (
            <>
              <Link to="/auth">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/auth?tab=signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Smart Financial Management for CAs and Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10"
          >
            Leverage AI to streamline accounting, optimize taxes, and gain financial insights
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to={session ? "/dashboard" : "/auth"}>
              <Button size="lg" className="px-8 py-6 text-lg">
                {session ? "Go to Dashboard" : "Get Started"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-elegant border border-gray-100"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Analytics</h3>
              <p className="text-gray-600">
                Get real-time insights into your financial data with AI-powered analytics and visualization tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-elegant border border-gray-100"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tax Optimization</h3>
              <p className="text-gray-600">
                Maximize your tax savings with intelligent recommendations and compliance checks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-elegant border border-gray-100"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Integration</h3>
              <p className="text-gray-600">
                Access your financial data anytime, anywhere with secure cloud storage and real-time synchronization.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">
              © 2023 CA AI Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
