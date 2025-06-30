import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import {
  useController,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";
interface FormSelectProps {
  className?: string;
  labelText: string;
  req?: boolean;
  name: string;
  placeholder?: string;
  data: string[];
  dataValues: string[];
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  rules?: RegisterOptions;
}

const FormSelect = ({
  className,
  labelText,
  req,
  name,
  data,
  value,
  dataValues,
  placeholder,
  rules,
}: FormSelectProps) => {
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
      <Select onValueChange={field.onChange} value={field.value}>
        <SelectTrigger className="w-full border border-gray-300 rounded px-3 py-2" id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((val, index) => (
            <SelectItem key={index} value={dataValues[index]}>{val}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
