import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { useController, useFormContext, type RegisterOptions } from "react-hook-form";
import { useEffect } from "react";

interface FormCascadingSelectProps {
  className?: string;
  labelText: string;
  req?: boolean;
  name: string;
  placeholder?: string;
  data: string[];
  dataValues: string[];
  condition?: string;
  value?: string;
  rules?: RegisterOptions;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
}

const FormCascadingSelect = ({
  className,
  labelText,
  req,
  name,
  value,
  data,
  dataValues,
  placeholder,
  rules
}: // condition,
FormCascadingSelectProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control, rules });
  useEffect(() => {
    if (value) {
      field.value = value;
    }
  }, [value, field]);
  return (
    <div className={className}>
      <Label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor={name}
      >
        {labelText}
        {req && <span className="text-red-600">*</span>}
      </Label>
      <Select
        onValueChange={field.onChange}
        value={field.value}
        // disabled={!condition}
      >
        <SelectTrigger className="w-full border border-gray-300 rounded px-3 py-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((val, index) => (
            <SelectItem key={val} value={dataValues[index]}>{val}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormCascadingSelect;
