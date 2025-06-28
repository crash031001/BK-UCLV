import { cn } from "@/lib/utils";

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({
  className,
  currentPage,
  totalPages,
  paginate,
}: PaginationProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center my-4 space-x-2",
        className
      )}
    >
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md border border-gray-300 ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-uclv-light-blue cursor-pointer"
        }`}
      >
        Anterior
      </button>

      <span className="px-4 py-2 bg-uclv-blue text-white rounded-md select-none">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md border border-gray-300 ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-uclv-light-blue cursor-pointer"
        }`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
