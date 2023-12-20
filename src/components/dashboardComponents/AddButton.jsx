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
          <div className="bg-white p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10">
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
                  className="text-sm font-semibold font-popins"
                >
                  Password Label
                </label>
                <input
                  type="text"
                  id="label"
                  className="w-full border p-2 mt-2 rounded border-slate-300 text-sm focus:outline-none focus:border-blue font-open"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold font-open"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="w-full border p-2 mt-2 rounded border-slate-300 text-sm font-open focus:outline-none focus:border-blue"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="category"
                  className="text-sm font-semibold font-open"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="w-full border p-2 mt-2 rounded border-slate-300 text-sm font-open focus:outline-none focus:border-blue"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="url"
                  className="text-sm font-semibold font-open"
                >
                  URL / Domain name
                </label>
                <input
                  type="text"
                  id="url"
                  className="w-full border p-2 mt-2 rounded border-slate-300 text-sm font-open focus:outline-none focus:border-blue"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="text-sm font-semibold font-open"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="5"
                  className="w-full border p-2 mt-2 rounded border-slate-300 text-sm font-open focus:outline-none focus:border-blue"
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
