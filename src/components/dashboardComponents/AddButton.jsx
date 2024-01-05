import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { IoMdAdd } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Service
import { addPassword } from "../../services/mainService";

// State
import { updateUserPassData } from "../../slices/authSlice";

const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("main");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSuccess(false);
    setError(false);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    addPassword(token, label, password, category, url, description)
      .then((res) => {
        if (res.data?.status === null) {
          setPassword("");
          setLabel("");
          setURL("");
          setDescription("");
          setError(false);
          setSuccess(true);
          setMessage("Password added successfully");
          setIsLoading(false);
          dispatch(updateUserPassData(res.data));
        } else if (res.data?.status === 406) {
          setSuccess(false);
          setError(true);
          setIsLoading(false);
          setMessage(res.data?.message);
        }
      })
      .catch();
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
        <div className="fixed -top-5 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur p-10">
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
            <form action="" className="mt-4" onSubmit={(e) => handleSubmit(e)}>
              <p
                className={`text-xs font-popins mt-4 mb-4 ${
                  error ? "text-red-500" : ""
                } ${success ? "text-green-500" : ""}`}
              >
                {message}
              </p>
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
                  className="w-full border p-3 mt-2 rounded-sm border-slate-300 text-xs focus:outline-none focus:border-blue font-open text-black dark:bg-[#191919] dark:border-none dark:text-white"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
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
                  className="w-full border p-3 mt-2 text-xs rounded-sm border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#191919] dark:border-none dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  className="w-full border p-3 mt-2 rounded-sm text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#191919] dark:border-none dark:text-white"
                  disabled={true}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  className="w-full border p-3 mt-2 rounded-sm border-slate-300 text-xs font-open focus:outline-none focus:border-blue text-black dark:bg-[#191919] dark:border-none dark:text-white"
                  value={url}
                  onChange={(e) => setURL(e.target.value)}
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
                  className="w-full border p-2 mt-2 rounded-sm border-slate-300 text-xs font-open focus:outline-none focus:border-blue resize-none text-black dark:bg-[#191919] dark:border-none dark:text-white"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4 mb-5">
                <button className="w-5/12 bg-blue text-white p-2 text-sm rounded hover:bg-opacity-90 focus:outline-none focus:shadow-outline font-popins">
                  {isLoading ? (
                    <ClipLoader size={15} color="white" />
                  ) : (
                    "Add password"
                  )}
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
