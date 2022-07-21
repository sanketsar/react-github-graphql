const Pagination = ({ total, onNextPage, onPreviousPage, hasPreviousPage, hasNextPage }: PaginationProps) => {
  const next = () => {
    onNextPage();
  };

  const previous = () => {
    onPreviousPage();
  };

  return (
    <div className="flex items-center justify-between py-3 bg-white border-gray-200">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">TOTAL : {total} results</p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              disabled={!hasPreviousPage}
              onClick={previous}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 disabled:opacity-75 rounded-l-md hover:bg-blue-800 disabled:hover:bg-blue-600"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              disabled={!hasNextPage}
              onClick={next}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 disabled:opacity-50 rounded-r-md hover:bg-blue-800 disabled:hover:bg-blue-600"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

interface PaginationProps {
  total: number;
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export default Pagination;
