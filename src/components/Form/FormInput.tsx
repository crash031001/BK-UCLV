import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext, type RegisterOptions } from "react-hook-form";
interface FormInputProps {
	className?: string;
	labelText: string;
	req?: boolean;
	name: string;
	placeholder?: string;
	type?: string;
	rules?: RegisterOptions;
	value?: string;
}

const FormInput = ({
	className,
	labelText,
	req,
	name,
	placeholder,
	type = "text",
	rules,
	value = "",
}: FormInputProps) => {
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
			<Input
				type={type}
				id={name}
				className="w-full border border-gray-300 rounded px-3 py-2"
				placeholder={placeholder}
				{...register(name, rules)}
			/>
		</div>
	);
};

export default FormInput;
