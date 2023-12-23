import { useSelector } from "react-redux";

// Icons
import { LuView } from "react-icons/lu";

const TableOne = () => {
  const data = useSelector((state) => state.usePassData);

  return (
    <div className="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-lg sm:px-7.5 xl:pb-1 font-popins dark:bg-[#111] dark:text-slate-200">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recently used or added
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Label
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Password
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Comments
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>
        {data.map((item) => (
          <div
            key={item.password_id}
            className="grid grid-cols-3 border-b border-slate-200 dark:border-strokedark sm:grid-cols-5"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 text-xs">
              <div className="flex-shrink-0">
                <p>{item.label}</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 text-xs">
              <p className="text-black dark:text-white">************</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 text-xs">
              <p className="text-meta-3">{item.category}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 text-xs">
              <p className="text-black dark:text-white">{item.description}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 sm:items-center sm:justify-center sm:space-x-7 text-2xl">
              <LuView className="text-blue cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
