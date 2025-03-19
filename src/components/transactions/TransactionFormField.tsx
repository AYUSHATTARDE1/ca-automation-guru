
import React from "react";
import { Control } from "react-hook-form";
import { LucideIcon } from "lucide-react";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { TransactionFormValues } from "./TransactionFormSchema";

interface TransactionFormFieldProps {
  control: Control<TransactionFormValues>;
  name: keyof TransactionFormValues;
  label: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export const TransactionFormField: React.FC<TransactionFormFieldProps> = ({
  control,
  name,
  label,
  icon: Icon,
  children,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
              {React.cloneElement(children as React.ReactElement, {
                ...field,
                className: `pl-9 ${(children as React.ReactElement).props.className || ""}`,
              })}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
