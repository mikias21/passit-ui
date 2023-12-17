import { IoMdAdd } from "react-icons/io";

const AddButton = () => {
  return (
    <div className="fixed bottom-4 right-8">
      <button className="bg-blue text-white rounded-full p-4 shadow-2xl hover:bg-lightblue">
        <IoMdAdd className=" font-bold text-2xl" />
      </button>
    </div>
  );
};

export default AddButton;
