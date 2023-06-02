/* eslint-disable react/prop-types */
const DataTableDetails = (props) => {
  const { name, createDate, dueDate, amount, sent, status, selectAll } = props;

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <input
              type="checkbox"
              checked={selectAll}
              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
            />

            <div className="flex items-center gap-x-2">
              <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-normal text-gray-800 dark:text-white ">
                  {name}
                </h2>
                <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  INV-17066
                </p>
              </div>
            </div>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
          {createDate}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {dueDate}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {amount}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {sent}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {status}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default DataTableDetails;
