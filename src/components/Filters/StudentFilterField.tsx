import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StudentFilterFieldProps {
  labelText?: string;
  id?: string;
  placeholder?: string
}

const StudentFilterField = ({ labelText, id, placeholder }: StudentFilterFieldProps) => {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {labelText}
      </Label>
      <Input
        type="text"
        placeholder={placeholder}
        id={id}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 transition-all duration-300 focus:ring-uclv-blue"
      />
    </div>
  );
};

export default StudentFilterField;
