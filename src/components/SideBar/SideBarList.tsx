import { useEffect, useState } from "react";

interface SideBarListProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  isAnyChildActive: boolean;
}

const SideBarList = ({
  title,
  icon,
  children,
  isAnyChildActive,
}: SideBarListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isAnyChildActive) {
      setIsOpen(true);
    }
  }, [isAnyChildActive]);

  return (
    <div className="mb-6">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200"
      >
        <span>
          <i className={`mr-2 fas ${icon}`}></i>
          {title}
        </span>
        <i
          className={`fas fa-chevron-down transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>

      <ul className={`ml-4 mt-2 space-y-2 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </ul>
    </div>
  );
};

export default SideBarList;
