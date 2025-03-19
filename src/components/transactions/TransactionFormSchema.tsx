
import * as z from "zod";

// Schema that defines the shape and validation rules for transaction form
export const transactionSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }).transform((val) => parseFloat(val)),
  description: z.string().min(3, { message: "Description must be at least 3 characters" }),
  category: z.string().min(1, { message: "Category is required" }),
  transaction_date: z.string().min(1, { message: "Date is required" }),
});

// Type exported from the schema for type safety throughout the application
export type TransactionFormValues = z.infer<typeof transactionSchema>;

// Categories available for transactions
export const categories = [
  "Income",
  "Rent",
  "Utilities",
  "Groceries",
  "Transportation",
  "Entertainment",
  "Healthcare",
  "Education",
  "Shopping",
  "Travel",
  "Investments",
  "Taxes",
  "Other",
];
