
import React, { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

import { TransactionFormSchema, TransactionFormValues } from "./TransactionFormSchema";
import { TransactionFormContent } from "./TransactionFormContent";

interface TransactionFormProps {
  onSuccess?: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: TransactionFormValues) => {
    setIsLoading(true);
    try {
      // Get the user session
      const { data: sessionData } = await supabase.auth.getSession();
      const user_id = sessionData?.session?.user?.id;
      
      if (!user_id) {
        toast.error("You must be logged in to add a transaction");
        setIsLoading(false);
        return;
      }

      const { error } = await supabase.from("transactions").insert({
        amount: values.amount, // This is now a number after zod transformation
        description: values.description,
        category: values.category,
        transaction_date: values.transaction_date,
        user_id: user_id
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Transaction added successfully");
      setIsOpen(false);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Transaction</DialogTitle>
        </DialogHeader>
        <TransactionFormContent 
          onSubmit={handleSubmit} 
          isLoading={isLoading} 
          onCancel={() => setIsOpen(false)} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default TransactionForm;
