import type React from "react";

interface AddBtnProps {
  text: string;
  children: React.ReactNode;
  onClick: ()=> void
}

const AddBtn = ({ text, children,onClick }: AddBtnProps) => {
  return (
    <div className="flex space-x-3" onClick={onClick}>
      <button
        id="add-student-btn"
        className="bg-uclv-green cursor-pointer hover:bg-green-500 text-white px-4.5 py-2 rounded-md transition duration-200 text-md"
      >
        {children}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default AddBtn;
