import { useState } from "react";
import { useSelector } from "react-redux";

// Icons
import { LuView } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TableOne = () => {
  const data = useSelector((state) => state.usePassData);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const toggleModal = () => {
    setIsViewModalOpen(!isViewModalOpen);
  };

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
            key={item?.password_id}
            className="grid grid-cols-3 border-b border-slate-200 dark:border-strokedark sm:grid-cols-5"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 text-xs">
              <div className="flex-shrink-0">
                <p>{item?.label}</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 text-xs">
              <p className="text-black dark:text-white">************</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 text-xs">
              <p className="text-meta-3">{item?.category}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 text-xs">
              <p className="text-black dark:text-white">{item?.description}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 sm:items-center sm:justify-center sm:space-x-7 text-2xl">
              <LuView
                className="text-blue cursor-pointer"
                onClick={toggleModal}
              />
            </div>
          </div>
        ))}
      </div>

      {isViewModalOpen && (
        <div className="fixed -top-5 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur">
          <div className="bg-white mt-10 p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10 dark:bg-[#111] dark:text-slate-200 dark:border-none">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-popins font-extralight">
                Password Details{" "}
              </h1>
              <IoIosCloseCircleOutline
                className="text-3xl text-slate-400 cursor-pointer"
                onClick={toggleModal}
              />
            </div>
            <hr className="mt-2 w-5/12 border-slate-200" />
            <div className="mt-4 mb-4 border border-slate-100 p-2 shadow-md">
              <div className="mb-2">
                <IoCopyOutline className="float-right text-blue cursor-pointer" />
              </div>
              <div className="mt-6 text-xs">
                <ul>
                  <li className="text-xs mb-2">
                    <span className="font-bold">Password Label</span> Gmail
                  </li>
                  <li className="text-xs mb-2">
                    <span className="font-bold">Password Category</span> main
                  </li>
                  <li className="text-xs mb-2 flex items-center space-x-5">
                    <span className="font-bold">password </span>{" "}
                    <span className=" blur-sm">secret here</span>
                    <FaEye className="text-blue cursor-pointer" />
                  </li>
                  <li className="text-xs mb-2">
                    <span className="font-bold">Password URL</span>{" "}
                    <span className="text-blue">gmail.com</span>
                  </li>
                  <li className="text-xs mb-2">
                    <span className="font-bold">Description</span> Gmail
                  </li>
                  <li className="text-xs mb-2">
                    <span className="font-bold">Created Date Time</span>{" "}
                    12//11/2024 12:34:54
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <form action="" className="mt-10">
                  <p className=" text-orange-500 text-sm mb-4">
                    Update password
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-full">
                      <input
                        placeholder="Password Label"
                        type="text"
                        className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        placeholder="password"
                        type="text"
                        className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-full">
                      <input
                        placeholder="main"
                        disabled
                        type="text"
                        className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none "
                      />
                    </div>
                    <div className="w-full">
                      <input
                        placeholder="URL or domain name"
                        type="text"
                        className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                      placeholder="Update comments"
                      className="w-full border p-2 rounded-xs border-slate-300 text-xs font-open focus:outline-none focus:border-blue resize-none text-black dark:focus:border-none"
                    ></textarea>
                  </div>
                  <div className="flex w-6 h-6 bg-blue text-center rounded-full text-white items-center mt-2 float-right">
                    <IoCheckmarkSharp className="w-full mx-auto cursor-pointer" />
                  </div>
                </form>
              </div>
              <div className="mt-10 mb-5">
                <p className=" text-red-600 text-sm">Delete password</p>
                <form action="" className="mt-4">
                  <p className="text-xs mb-2">
                    <span className="text-red-600">
                      Are you sure you want to delete ?
                    </span>{" "}
                    Type <span className="italic">password</span> and submit
                  </p>
                  <div className="w-full">
                    <input
                      placeholder="password"
                      type="text"
                      className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                    />
                  </div>
                  <div className="flex w-6 h-6 bg-red-500 text-center rounded-full text-white items-center mt-2 float-right">
                    <IoCheckmarkSharp className="w-full mx-auto cursor-pointer" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableOne;
