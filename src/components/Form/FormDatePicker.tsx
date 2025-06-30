"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";
import { es } from "date-fns/locale";
import { useController, useFormContext, type RegisterOptions } from "react-hook-form";

interface FormDatePickerProps {
  className?: string;
  labelText: string;
  name: string;
  placeholder?:string
  rules?:RegisterOptions
  value?:Date
}

export function FormDatePicker({
  className,
  labelText,
  name,
  placeholder = "Seleccione",
  rules,
  value
}: FormDatePickerProps) {
  const {control} = useFormContext()
  const {field} = useController({ name, control, rules })
  React.useEffect(() => {
    if (value) {
      field.value = value;
    }
  }, [value, field]);
  return (
    <div>
        <Label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor={name}
      >
        {labelText}
      </Label>
    <Popover>
      <PopoverTrigger asChild className={cn("!w-full", className)} id={name}>
        <Button
          variant="outline"
          data-empty={!field.value}
          className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal w-full border border-gray-300 rounded px-3 py-2"
        >
          <CalendarIcon />
          {field.value ? format(field.value, "PPP",{locale:es}) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={field.value} onSelect={field.onChange} locale={es} />
      </PopoverContent>
    </Popover>
    </div>
  );
}
