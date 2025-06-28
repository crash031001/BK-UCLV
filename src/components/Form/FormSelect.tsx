import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
interface FormSelectProps {
  className?: string;
  labelText: string;
  req?: boolean;
  name: string;
  placeholder?: string;
  data: string[];
  dataValues: string[];
  value?:string
  onChange?: React.Dispatch<React.SetStateAction<string>>
}

const FormSelect = ({ className,labelText,req,name,data,dataValues,placeholder,onChange,value}: FormSelectProps) => {
  return (
    <div className={className}>
        <Label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>{labelText}</Label>
        <Select required={req} onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full border border-gray-300 rounded px-3 py-2">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data?.map((val,index) =>(
            <SelectItem value={dataValues[index]}>{val}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  );
};

export default FormSelect;
