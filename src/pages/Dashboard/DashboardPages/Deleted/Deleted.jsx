import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

// Components
import Header from "../../../../components/dashboardComponents/Header";
import Sidebar from "../../../../components/dashboardComponents/Sidebar";
import AddButton from "../../../../components/dashboardComponents/AddButton";

// Custom hooks
import useAuth from "../../../../hooks/useAuth";

// Services
import {
  restoreDeletedPassword,
  deletePasswordForever,
} from "../../../../services/mainService";

// Slices
import { restorePassword } from "../../../../slices/authSlice";

const Deleted = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const data = useSelector((state) => state.userPassDataDeleted);
  const token = useSelector((state) => state.token);
  const { isAuthenticated } = useAuth();
  const [restoreMessage, setRestoreMessage] = useState(
    "Password has been restored."
  );
  const [deleteToastMessage, setDeleteToastMessage] = useState(
    "Password has been removed permanently."
  );
  const notify = (message) => toast(message);
  const dispatch = useDispatch();

  const [passwordLabelView, setPasswordLabelView] = useState("");
  const [passwordID, setPasswordID] = useState("");
  const [isRestoreModalOpen, setRestoreModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [deletePasswordLabel, setDeletePasswordLabel] = useState("");

  const toggleModal = (password_id) => {
    setMessage("");
    setDeleteMessage("");
    setPasswordID(password_id);
    const filteredData = data.filter(
      (item) => item.password_id === password_id
    );
    setPasswordLabelView(filteredData[0]?.label);

    setRestoreModalOpen(!isRestoreModalOpen);
  };

  const toggleDeleteModal = (password_id) => {
    setMessage("");
    setDeleteMessage("");
    setPasswordID(password_id);
    const filteredData = data.filter(
      (item) => item.password_id === password_id
    );
    setPasswordLabelView(filteredData[0]?.label);

    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleRestoreSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setMessage(false);
    setRequestLoading(true);
    setRestoreMessage("Password has been restored.");

    restoreDeletedPassword(passwordID, token)
      .then((res) => {
        if (res.status === 201) {
          setRequestLoading(false);
          dispatch(restorePassword(res.data?.password_id));
          setRestoreModalOpen(false);
          notify(restoreMessage);
        }
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
        setRequestLoading(false);
        // setMessage(res.data.)
      });
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    setDeleteIsLoading(true);
    setDeleteError(false);
    setDeleteMessage("");
    setDeleteSuccess(false);
    setDeleteToastMessage("Password has been removed permanently.");

    deletePasswordForever(passwordID, passwordLabelView, token)
      .then((res) => {
        setDeleteIsLoading(false);
        if (res.status === 200) {
          if (res.data?.password_id) {
            setPasswordLabelView("");
            setRequestLoading(false);
            dispatch(restorePassword(res.data?.password_id));
            setDeleteModalOpen(false);
            notify(deleteToastMessage);
          } else {
            setDeleteError(true);
            setDeleteMessage(res.data?.message);
            setPasswordLabelView("");
          }
        }
      })
      .catch((err) => {
        setDeleteIsLoading(false);
        setDeleteError(true);
        // setDeleteMessage(err.response.data);
      });
  };

  return (
    <>
      {isAuthenticated ? (
        <div className=" bg-slate-50 dark:bg-black">
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                  <AddButton />
                  <div className="col-span-12 xl:col-span-8">
                    {/* <TableOne data={data} title="What you've deleted" /> */}
                    <div className="rounded-sm bg-white px-5 pt-6 pb-2.5 shadow-lg sm:px-7.5 xl:pb-1 font-popins dark:bg-[#111] dark:text-slate-200">
                      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                        What you've deleted
                      </h4>
                      <ToastContainer
                        hideProgressBar={true}
                        closeOnClick
                        theme={`dark ? dark : light`}
                      />
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
                          <div className="hidden p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                              Category
                            </h5>
                          </div>
                          <div className="hidden p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                              Comments
                            </h5>
                          </div>
                          <div className="p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                              Actions
                            </h5>
                          </div>
                        </div>

                        {data?.map((item) => (
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
                              <p className="text-black dark:text-white">
                                ************
                              </p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 text-xs">
                              <p className="text-meta-3">{item?.category}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 text-xs">
                              <p className="text-black dark:text-white">
                                {item?.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5 sm:items-center sm:justify-center sm:space-x-7 text-2xl">
                              <MdOutlineSettingsBackupRestore
                                className="text-blue cursor-pointer"
                                onClick={() => toggleModal(item?.password_id)}
                              />
                              <MdOutlineDeleteForever
                                className="text-red-500 cursor-pointer text-[28px]"
                                onClick={() =>
                                  toggleDeleteModal(item?.password_id)
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          {isRestoreModalOpen && (
            <div className="fixed -top-52 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur p-10">
              <div className="bg-white mt-10 p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10 dark:bg-[#111] dark:text-slate-200 dark:border-none">
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl font-popins font-extralight">
                    Confirm to restore Password{" "}
                  </h1>
                  <IoIosCloseCircleOutline
                    className="text-3xl text-slate-400 cursor-pointer"
                    onClick={toggleModal}
                  />
                </div>
                <hr className="mt-2 w-5/12 border-slate-200" />
                <form
                  action=""
                  className="mt-5"
                  onSubmit={(e) => handleRestoreSubmit(e)}
                >
                  <p
                    className={`text-xs font-popins mb-2 ${
                      error ? "text-red-500" : ""
                    } ${success ? "text-green-500" : ""}`}
                  >
                    {message}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-full">
                      <input
                        placeholder={passwordLabelView}
                        type="text"
                        className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                        disabled
                      />
                    </div>
                  </div>
                  {requestLoading ? (
                    <div className="flex float-right">
                      <ClipLoader
                        color="#3742fa"
                        loading={true}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  ) : (
                    <button className="flex w-6 h-6 bg-blue text-center rounded-full text-white items-center mt-2 float-right hover:opacity-80">
                      <IoCheckmarkSharp className="w-full mx-auto cursor-pointer" />
                    </button>
                  )}
                </form>
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className="fixed -top-52 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur p-10">
              <div className="bg-white mt-10 p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10 dark:bg-[#111] dark:text-slate-200 dark:border-none">
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl font-popins font-extralight">
                    Delete this password permanently{" "}
                  </h1>
                  <IoIosCloseCircleOutline
                    className="text-3xl text-slate-400 cursor-pointer"
                    onClick={toggleDeleteModal}
                  />
                </div>
                <hr className="mt-2 w-5/12 border-slate-200" />
                <p className="mt-7 text-xs mb-2">
                  <span className="text-red-600">
                    Are you sure you want to delete ? <br /> you cannot undo
                    this action.
                  </span>{" "}
                  Type{" "}
                  <span className="italic font-bold">{passwordLabelView}</span>{" "}
                  and submit
                </p>
                <form
                  action=""
                  className="mt-4"
                  onSubmit={(e) => handleDeleteSubmit(e)}
                >
                  <p
                    className={`text-xs font-popins mb-2 ${
                      deleteError ? "text-red-500" : ""
                    } ${deleteSuccess ? "text-green-500" : ""}`}
                  >
                    {deleteMessage}
                  </p>

                  <div className="w-full">
                    <input
                      placeholder="password"
                      type="text"
                      className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                      value={deletePasswordLabel}
                      onChange={(e) => setDeletePasswordLabel(e.target.value)}
                    />
                  </div>
                  {deleteIsLoading ? (
                    <div className="flex float-right mt-3">
                      <ClipLoader
                        color="red"
                        loading={true}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  ) : (
                    <button className="flex w-6 h-6 bg-red-500 text-center rounded-full text-white items-center mt-2 float-right hover:opacity-80">
                      <IoCheckmarkSharp className="w-full mx-auto cursor-pointer" />
                    </button>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Navigate replace to="/signin" />
      )}
    </>
  );
};

export default Deleted;
