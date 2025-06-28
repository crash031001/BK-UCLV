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
        className="bg-uclv-green cursor-pointer hover:bg-green-500 text-white px-3 py-2 rounded-lg transition duration-200 text-sm"
      >
        {children}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default AddBtn;
