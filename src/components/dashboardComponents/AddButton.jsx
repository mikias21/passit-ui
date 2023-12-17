import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

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
        <div className="fixed -top-64 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100">
            <h1>Hello world</h1>

            <div className="flex items-center justify-end mt-4">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toggleModal}
              >
                I accept
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={toggleModal}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;
