import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

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
	condition,
}: FormCascadingSelectProps) => {
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
				value={value}
				disabled={!condition}
			>
				<SelectTrigger className="w-full border border-gray-300 rounded px-3 py-2">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{data?.map((val, index) => (
						<SelectItem value={dataValues[index]}>{val}</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default FormCascadingSelect;
