import { useFormContext, type RegisterOptions } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormTextAreaProps {
	className?: string;
	labelText: string;
	req?: boolean;
	name: string;
	placeholder?: string;
	rules?: RegisterOptions;
	value?: string;
}

const FormTextArea = ({className,name,value,req,labelText,rules,placeholder}:FormTextAreaProps) => {
    const { register, setValue } = useFormContext();
	if (value) setValue(name, value);
	return (
		<div className={className}>
			<Label
				className="block text-sm font-medium text-gray-700 mb-1"
				htmlFor={name}
			>
				{labelText}
				{req && <span className="text-red-600">*</span>}
			</Label>
			<Textarea
				id={name}
				className="w-full border border-gray-300 rounded px-3 py-2"
				placeholder={placeholder}
				{...register(name, rules)}
			/>
		</div>
  );
};

export default FormTextArea;