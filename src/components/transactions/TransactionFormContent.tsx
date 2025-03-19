
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  DollarSign, 
  Calendar, 
  Tag, 
  Info 
} from "lucide-react";

import {
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { transactionSchema, TransactionFormValues, categories } from "./TransactionFormSchema";
import { TransactionFormField } from "./TransactionFormField";

interface TransactionFormContentProps {
  onSubmit: (values: TransactionFormValues) => Promise<void>;
  isLoading: boolean;
  onCancel: () => void;
}

export const TransactionFormContent: React.FC<TransactionFormContentProps> = ({ 
  onSubmit, 
  isLoading, 
  onCancel 
}) => {
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: "",
      description: "",
      category: "",
      transaction_date: new Date().toISOString().split('T')[0],
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <TransactionFormField
          control={form.control}
          name="amount"
          label="Amount"
          icon={DollarSign}
        >
          <Input placeholder="0.00" type="number" step="0.01" />
        </TransactionFormField>

        <TransactionFormField
          control={form.control}
          name="description"
          label="Description"
          icon={Info}
        >
          <Textarea placeholder="What was this transaction for?" className="min-h-[80px]" />
        </TransactionFormField>

        <TransactionFormField
          control={form.control}
          name="category"
          label="Category"
          icon={Tag}
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </TransactionFormField>

        <TransactionFormField
          control={form.control}
          name="transaction_date"
          label="Date"
          icon={Calendar}
        >
          <Input type="date" />
        </TransactionFormField>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={onCancel} type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Transaction"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
