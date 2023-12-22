import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

// Icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed bottom-4 right-8">
      <button
        className="bg-blue text-white rounded-full p-4 shadow-2xl hover:bg-lightblue"
        type="button"
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        onClick={toggleModal}
      >
        <IoMdAdd className=" font-bold text-2xl" />
      </button>

      {isModalOpen && (
        <div className="fixed -top-5 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur">
          <div className="bg-white p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10 dark:bg-[#111] dark:text-slate-200 dark:border-none">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-popins font-extralight">
                Add a new password{" "}
              </h1>
              <IoIosCloseCircleOutline
                className="text-3xl text-slate-400 cursor-pointer"
                onClick={toggleModal}
              />
            </div>
            <hr className="mt-2 w-5/12 border-slate-200" />
            <form action="" className="mt-4">
              <div>
                <label
                  htmlFor="label"
                  className="text-xs font-semibold font-popins"
                >
                  Password Label
                  <span className="text-red-500 text-sm">*</span>
                </label>
                <input
                  type="text"
                  id="label"
                  placeholder="Name your password something you can remember"
                  className="w-full border p-2 mt-2 rounded-sm border-slate-300 text-xs focus:outline-none focus:border-blue font-open text-black dark:focus:border-none"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold font-popins"
                >
                  Password<span className="text-red-500 text-sm">*</span>
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Password you want to save"
                  className="w-full border p-2 mt-2 text-xs rounded-sm border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="category"
                  className="text-xs font-semibold font-popins"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder="default category is main"
                  className="w-full border p-2 mt-2 rounded-sm text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="url"
                  className="text-xs font-semibold font-popins"
                >
                  URL
                </label>
                <input
                  type="text"
                  id="url"
                  placeholder="Url or domain name where you use this password"
                  className="w-full border p-2 mt-2 rounded-sm border-slate-300 text-xs font-open focus:outline-none focus:border-blue text-black dark:focus:border-none"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="text-xs font-semibold font-popins"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="5"
                  placeholder="If you want to note down something, feel free"
                  className="w-full border p-2 mt-2 rounded-sm border-slate-300 text-xs font-open focus:outline-none focus:border-blue resize-none text-black dark:focus:border-none"
                ></textarea>
              </div>
              <div className="mt-4 mb-5">
                <button className="w-5/12 bg-blue text-white p-2 text-sm rounded hover:bg-opacity-90 focus:outline-none focus:shadow-outline font-popins">
                  Add password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
