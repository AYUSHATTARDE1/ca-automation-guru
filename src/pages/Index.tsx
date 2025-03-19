
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Briefcase,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
} from "lucide-react";

const Index: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Disable scrolling on mobile when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Testimonials */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
                Trusted by Businesses
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Businesses of all sizes trust CA AI to automate their financial operations and unlock growth opportunities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "CA AI has completely transformed our financial operations. We've reduced accounting costs by 70% while gaining real-time insights we never had before.",
                  author: "Sarah Johnson",
                  role: "CFO, TechVision Inc.",
                  icon: <Building2 size={20} />,
                },
                {
                  quote:
                    "The tax optimization feature alone saved us over $12,000 last year. The platform keeps getting smarter and finding new ways to improve our financial health.",
                  author: "Michael Chen",
                  role: "Owner, Chen Consulting",
                  icon: <Briefcase size={20} />,
                },
                {
                  quote:
                    "As a small business owner, I couldn't afford a full finance team. CA AI gives me enterprise-level financial management at a fraction of the cost.",
                  author: "Jessica Miller",
                  role: "Founder, Miller Creative",
                  icon: <Users size={20} />,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 rounded-2xl border border-border bg-white"
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4 p-2 rounded-full bg-secondary">
                      {testimonial.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a href="#case-studies" className="inline-flex items-center text-primary font-medium hover:underline">
                View All Case Studies
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
                Pricing Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Choose the Perfect Plan for Your Business
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business. All plans include our core AI-powered features.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  description: "Perfect for freelancers and small businesses",
                  features: [
                    "Auto-Bookkeeping",
                    "Invoice Generation",
                    "Basic Tax Reports",
                    "Monthly Financial Statements",
                    "Email Support",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$99",
                  description: "Ideal for growing businesses with complex needs",
                  features: [
                    "Everything in Starter",
                    "Advanced Tax Optimization",
                    "Custom Financial Insights",
                    "Cash Flow Forecasting",
                    "Priority Support",
                    "Multi-Currency Support",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$249",
                  description: "Comprehensive solution for larger organizations",
                  features: [
                    "Everything in Professional",
                    "Custom AI Model Training",
                    "Dedicated Account Manager",
                    "Custom API Integration",
                    "Advanced Business Intelligence",
                    "White-label Reporting",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`rounded-2xl border ${
                    plan.popular ? "border-primary shadow-elegant-lg" : "border-border bg-white"
                  } overflow-hidden`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 size={16} className="mr-2 mt-1 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <button
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          plan.popular
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-secondary text-primary hover:bg-secondary/70"
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                All plans come with a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-2xl bg-primary text-white text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tl from-white/10"></div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-accent/30 blur-3xl"></div>
                <div className="absolute left-0 top-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Ready to Transform Your Financial Operations?
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                  Join thousands of businesses that have already simplified their financial management with CA AI.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/dashboard" 
                    className="px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors"
                  >
                    Get Started for Free
                    <ChevronRight size={16} className="inline-block ml-1" />
                  </Link>
                  <a 
                    href="#demo" 
                    className="px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Schedule a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact" className="py-20 md:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have questions about CA AI? Our team is here to help you understand how our platform can transform your financial operations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-secondary mr-4">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-muted-foreground">
                        contact@ca-ai.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-secondary mr-4">
                      <Building2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visit Our Office</h4>
                      <p className="text-muted-foreground">
                        123 Innovation Drive, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-secondary mr-4">
                      <ExternalLink size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Follow Us</h4>
                      <div className="flex space-x-3 mt-2">
                        {['Twitter', 'LinkedIn', 'Facebook'].map((social, i) => (
                          <a 
                            key={i}
                            href="#" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {social}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-border shadow-elegant">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-12 md:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-primary mr-1">CA</span>
                <span className="text-xl font-bold text-primary">AI</span>
              </div>
              <p className="text-muted-foreground mb-6">
                The ultimate AI-powered financial automation platform for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Testimonials', 'For Accountants', 'For Business Owners'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security', 'Compliance'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center md:flex md:justify-between md:items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} CA AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <select className="bg-secondary rounded px-3 py-1 text-sm border border-border">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
