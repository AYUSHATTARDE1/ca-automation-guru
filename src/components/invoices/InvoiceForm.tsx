
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  FileText, 
  DollarSign, 
  Calendar, 
  User, 
  Hash 
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

const invoiceSchema = z.object({
  client_name: z.string().min(3, { message: "Client name must be at least 3 characters" }),
  invoice_number: z.string().min(1, { message: "Invoice number is required" }),
  amount: z.string().min(1, { message: "Amount is required" }).transform((val) => parseFloat(val)),
  status: z.string().default("pending"),
  due_date: z.string().min(1, { message: "Due date is required" }),
});

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const statuses = [
  "pending",
  "paid",
  "overdue",
  "cancelled",
];

interface InvoiceFormProps {
  onSuccess?: () => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      client_name: "",
      invoice_number: `INV-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      amount: "",
      status: "pending",
      due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
    },
  });

  const onSubmit = async (values: InvoiceFormValues) => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
const user_id = user?.id;

      
      if (!user_id) {
        toast.error("You must be logged in to create an invoice");
        setIsLoading(false);
        return;
      }

      const { error } = await supabase.from("invoices").insert({
        client_name: values.client_name,
        invoice_number: values.invoice_number,
        amount: values.amount, // This is now a number after zod transformation
        status: values.status,
        due_date: values.due_date,
        user_id: user_id
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Invoice added successfully");
      form.reset({
        client_name: "",
        invoice_number: `INV-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        amount: "",
        status: "pending",
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      });
      setIsOpen(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error adding invoice:", error);
      toast.error("Failed to add invoice");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Add Invoice
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Invoice</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="client_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Client name" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoice_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="INV-0001" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="0.00" className="pl-9" type="number" step="0.01" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="date" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsOpen(false)} type="button">
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Invoice"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceForm;
