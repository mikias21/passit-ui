import { LuView } from "react-icons/lu";

const TableOne = () => {
  return (
    <div className="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-lg sm:px-7.5 xl:pb-1 font-popins">
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

        <div className="grid grid-cols-3 border-b border-slate-200 dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <p>Hello</p>
            </div>
            <p className="hidden text-black dark:text-white sm:block">Google</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">3.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$5,768</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">590</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 sm:items-center sm:justify-center sm:space-x-7 text-2xl">
            <LuView className="text-blue cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
