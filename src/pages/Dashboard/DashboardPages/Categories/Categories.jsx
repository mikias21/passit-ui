import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

// Icons
import { LuView } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdNotificationImportant } from "react-icons/md";
import { MdOutlineNotificationImportant } from "react-icons/md";

// Custom hooks
import useAuth from "../../../../hooks/useAuth";

// Components
import Header from "../../../../components/dashboardComponents/Header";
import Sidebar from "../../../../components/dashboardComponents/Sidebar";
import AddButton from "../../../../components/dashboardComponents/AddButton";

// Slices
import {
  updateUserPassCategoriesData,
  setAddCategoryModal,
  deleteSinglePassword,
  updateSpecificPassword,
  removeDataFromImportant,
  updateUserPassImportantData,
  removeDataFromStarred,
  updateUserPassStarredData,
} from "../../../../slices/authSlice";

// Services
import {
  updatePassword,
  deletePassword,
  viewPassword,
  updatePasswordImportant,
  updatePasswordStarred,
} from "../../../../services/mainService";
import { addCategory } from "../../../../services/categories";

const Categories = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const categories = useSelector((state) => state.userPassCategories);
  const userPassData = useSelector((state) => state.usePassData);
  const importantPassData = useSelector((state) => state.userPassDataImportant);
  const starredPassData = useSelector((state) => state.userPassDataStarred);
  const dispatch = useDispatch();

  const [dataTable, setDataTable] = useState(
    userPassData.filter(
      (data) => data?.category.toUpperCase() === "main".toUpperCase()
    )
  );

  const showAddCategoriesModal = useSelector(
    (state) => state.showAddCategoriesModal
  );

  const openAddCategoryModal = () => {
    dispatch(setAddCategoryModal(true));
  };

  const closeAddCategoryModal = () => {
    dispatch(setAddCategoryModal(false));
  };

  const [categoryName, setCategoryName] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const notify = () => toast("New category added.");

  const [passwordID, setPasswordID] = useState("");
  const [passwordLabelView, setPasswordLabelView] = useState("");
  const [passwordCategoryView, setPasswordCategoryView] = useState("main");
  const [passwordImportanceView, setPasswordImportanceView] = useState(false);
  const [passwordStarredView, setPasswordStarredView] = useState(false);
  const [passwordView, setPasswordView] = useState("");
  const [passwordURLView, setPasswordURLView] = useState();
  const [passwordDescriptionView, setPasswordDiscriptionView] = useState("");
  const [passwordDateTimeView, setPasswordDateTimeView] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [passwordLabelUpdate, setPasswordLabelUpdate] = useState("");
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const [passwordURLUpdate, setPasswordURLUpdate] = useState("");
  const [passwordDescriptionUpdate, setPasswordDescriptionUpdate] =
    useState("");
  const [plain, setPlain] = useState("");
  const [updateIsLoading, setUpdateIsLoading] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const [isBlurred, setIsBlurred] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [deletePasswordLabel, setDeletePasswordLabel] = useState("");
  const token = useSelector((state) => state.token);

  const handleCategoryChange = (changeValue) => {
    setDataTable(
      userPassData.filter(
        (data) => data?.category.toUpperCase() === changeValue.toUpperCase()
      )
    );
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    setRequestLoading(true);
    addCategory(token, categoryName)
      .then((res) => {
        setRequestLoading(false);
        if (res.status === 201) {
          if (res.data?.status === 400) {
            setError(true);
            setMessage(res.data?.message);
          } else {
            setError(false);
            setSuccess(true);
            setMessage("New category has been created.");
            setCategoryName("");
            dispatch(
              updateUserPassCategoriesData({
                id: res.data?.category_id,
                name: res.data?.category_name,
              })
            );
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleModal = (password_id) => {
    setPasswordID(password_id);
    const filteredData = dataTable.filter(
      (item) => item.password_id === password_id
    );
    setPasswordLabelView(filteredData[0]?.label);
    setPasswordCategoryView(filteredData[0]?.category);
    setPasswordView(filteredData[0]?.password);
    setPasswordImportanceView(filteredData[0]?.important);
    setPasswordStarredView(filteredData[0]?.starred);
    setPasswordURLView(
      filteredData[0]?.url ? filteredData[0]?.url : "URL or domain name"
    );
    setPasswordDiscriptionView(
      filteredData[0]?.description
        ? filteredData[0]?.description
        : "Some description"
    );

    const dateTime = new Date(filteredData[0]?.added_date_time);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    setPasswordDateTimeView(`${formattedDate} ${formattedTime}`);

    setIsViewModalOpen(!isViewModalOpen);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setUpdateError(false);
    setUpdateSuccess(false);
    setUpdateMessage("");
    setUpdateIsLoading(true);

    updatePassword(
      token,
      passwordID,
      passwordLabelUpdate,
      passwordUpdate,
      passwordURLUpdate,
      passwordDescriptionUpdate
    )
      .then((res) => {
        if (res.data?.status !== 201) {
          dispatch(updateSpecificPassword(res.data));
          setUpdateError(true);
          setUpdateMessage(res.data?.message);
          setUpdateIsLoading(false);
        }
        if (res.data?.status === null) {
          setUpdateIsLoading(false);
          setUpdateError(false);
          setUpdateSuccess(true);
          setUpdateMessage("Password updated successfully");
          setPasswordDiscriptionView(res.data?.description);
          setPasswordLabelView(
            res.data?.label ? res.data?.label : passwordLabelView
          );
          setPasswordView(
            res.data?.password ? res.data?.password : passwordView
          );
          setPasswordURLView(res.data?.url);
          setPasswordLabelUpdate("");
          setPasswordUpdate("");
          setPasswordURLUpdate("");
          setPasswordDescriptionUpdate("");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    setDeleteError(false);
    setDeleteSuccess(false);
    setDeleteMessage("");
    setDeleteIsLoading(true);

    deletePassword(token, passwordID, deletePasswordLabel)
      .then((res) => {
        if (res.data?.status !== null) {
          setDeleteIsLoading(false);
          setDeleteError(true);
          setDeleteMessage(res.data?.message);
        }

        if (res.data?.status === null) {
          setDeleteIsLoading(false);
          setDeleteError(false);
          setDeleteSuccess(true);
          setDeleteMessage("Password Deleted Successfully.");
          dispatch(deleteSinglePassword(res.data?.password_id));
          setIsViewModalOpen(!isViewModalOpen);
          setDeletePasswordLabel("");
          setDeleteMessage("");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleViewPassword = () => {
    viewPassword(token, passwordID)
      .then((res) => {
        if (res.data?.status === 200) {
          setIsBlurred(false);
          setIsHidden(false);
          setPlain(res.data?.password);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleHidePassword = () => {
    setIsBlurred(true);
    setIsHidden(true);
    setPlain("");
  };

  const copyPassword = () => {
    if (!isBlurred) {
      navigator.clipboard.writeText(plain);
      notify();
    }
  };

  const toggleImportance = () => {
    updatePasswordImportant(token, passwordID)
      .then((res) => {
        if (res.status === 201) {
          dispatch(updateSpecificPassword(res.data));
          setPasswordImportanceView(res.data?.important);
          if (passwordImportanceView === false) {
            dispatch(removeDataFromImportant(passwordID));
          } else if (passwordImportanceView === true) {
            importantPassData.forEach((item) => {
              if (item.password_id !== res.data?.password_id) {
                dispatch(updateUserPassImportantData(res.data));
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleStarred = () => {
    updatePasswordStarred(token, passwordID)
      .then((res) => {
        if (res.status === 201) {
          dispatch(updateSpecificPassword(res.data));
          setPasswordStarredView(res.data?.starred);
          if (passwordStarredView === false) {
            dispatch(removeDataFromStarred(passwordID));
          } else if (passwordStarredView === true) {
            starredPassData.forEach((item) => {
              if (item.password_id !== res.data?.password_id) {
                dispatch(updateUserPassStarredData(res.data));
              }
            });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isAuthenticated ? (
        <div className=" bg-slate-50 dark:bg-black">
          {showAddCategoriesModal && (
            <div className="fixed -top-60 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur p-10">
              <div className="bg-white mt-10 p-4 md:p-5 max-w-md w-full shadow-lg border border-slate-100 mb-10 dark:bg-[#111] dark:text-slate-200 dark:border-none">
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl font-popins font-extralight">
                    Add a new category{" "}
                  </h1>
                  <IoIosCloseCircleOutline
                    className="text-3xl text-slate-400 cursor-pointer"
                    onClick={closeAddCategoryModal}
                  />
                </div>
                <hr className="mt-2 w-5/12 border-slate-200" />
                <form
                  action=""
                  className="mt-5"
                  onSubmit={(e) => handleAddCategory(e)}
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
                        placeholder="Category name"
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
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
                        Your categories
                      </h4>
                      <div className="mb-7">
                        <div>
                          <p className="text-sm">Select category</p>
                          <div className="border border-slate-300 w-52 mt-2 p-2 text-xs dark:border-slate-600">
                            <select
                              className="w-full outline-none dark:bg-[#111] dark:text-slate-200"
                              onChange={(e) =>
                                handleCategoryChange(e.target.value)
                              }
                            >
                              {categories.map((category) => (
                                <option
                                  value={category.name}
                                  key={category.category_id}
                                >
                                  {category.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="text-xs mt-3">
                            <button
                              className=" bg-blue text-white p-2 shadow-lg rounded-3xl"
                              onClick={openAddCategoryModal}
                            >
                              Add new category
                            </button>
                          </div>
                        </div>
                      </div>
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
                        {dataTable?.map((item) => (
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
                              <LuView
                                className="text-blue cursor-pointer"
                                onClick={() => toggleModal(item?.password_id)}
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

            {isViewModalOpen && (
              <div className="fixed -top-5 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur p-10">
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
                  <div className="mt-4 mb-4 border border-slate-100 p-2 shadow-md dark:border-slate-900">
                    <div className="flex items-center justify-end gap-3">
                      <div className="mb-2">
                        <IoCopyOutline
                          className={`float-right ${
                            isBlurred
                              ? "text-slate-500"
                              : "text-blue cursor-pointer"
                          }`}
                          onClick={copyPassword}
                        />
                      </div>
                      {/* {console.log(passwordImportanceView)} */}
                      <div className="mb-2">
                        {passwordImportanceView ? (
                          <MdNotificationImportant
                            className="float-right text-blue cursor-pointer"
                            onClick={toggleImportance}
                          />
                        ) : (
                          <MdOutlineNotificationImportant
                            className="float-right text-blue cursor-pointer"
                            onClick={toggleImportance}
                          />
                        )}
                      </div>
                      <div className="mb-2">
                        {passwordStarredView ? (
                          <MdOutlineStar
                            className="float-right text-blue cursor-pointer"
                            onClick={toggleStarred}
                          />
                        ) : (
                          <MdOutlineStarBorder
                            className="float-right text-blue cursor-pointer"
                            onClick={toggleStarred}
                          />
                        )}
                      </div>
                    </div>
                    <div className="text-xs">
                      <ul>
                        <li className="text-xs mb-2">
                          <span className="font-bold">Password Label</span>{" "}
                          {passwordLabelView}
                        </li>
                        <li className="text-xs mb-2">
                          <span className="font-bold">Password Category</span>{" "}
                          {passwordCategoryView}
                        </li>
                        <li className="text-xs mb-2 flex items-center space-x-5">
                          <span className="font-bold">password </span>{" "}
                          <span className={`${isBlurred ? "blur-sm" : ""}`}>
                            {isHidden ? passwordView : plain}
                          </span>
                          {isHidden ? (
                            <FaEye
                              className="text-blue cursor-pointer"
                              onClick={handleViewPassword}
                            />
                          ) : (
                            <FaEyeSlash
                              className="text-blue cursor-pointer"
                              onClick={handleHidePassword}
                            />
                          )}
                        </li>
                        <li className="text-xs mb-2 flex space-x-5">
                          <span className="font-bold">Password URL</span>{" "}
                          <span className="text-blue whitespace-normal overflow-hidden line-clamp-0 text-ellipsis">
                            {passwordURLView}
                          </span>
                        </li>
                        <li className="text-xs mb-2">
                          <span className="font-bold">Description</span>{" "}
                          {passwordDescriptionView}
                        </li>
                        <li className="text-xs mb-2">
                          <span className="font-bold">Created Date Time</span>{" "}
                          {passwordDateTimeView}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="mt-10">Update password details</p>
                      <form
                        action=""
                        className="mt-5"
                        onSubmit={(e) => handleUpdateSubmit(e)}
                      >
                        <p
                          className={`text-xs font-popins mb-2 ${
                            updateError ? "text-red-500" : ""
                          } ${updateSuccess ? "text-green-500" : ""}`}
                        >
                          {updateMessage}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-full">
                            <input
                              placeholder={passwordLabelView}
                              type="text"
                              className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                              value={passwordLabelUpdate}
                              onChange={(e) =>
                                setPasswordLabelUpdate(e.target.value)
                              }
                            />
                          </div>
                          <div className="w-full">
                            <input
                              placeholder="**************"
                              type="text"
                              value={passwordUpdate}
                              onChange={(e) =>
                                setPasswordUpdate(e.target.value)
                              }
                              className="border mb-4 rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-full">
                            <input
                              placeholder={passwordCategoryView}
                              disabled
                              type="text"
                              className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                            />
                          </div>
                          <div className="w-full">
                            <input
                              placeholder={passwordURLView}
                              type="text"
                              value={passwordURLUpdate}
                              onChange={(e) =>
                                setPasswordURLUpdate(e.target.value)
                              }
                              className="border rounded-sm p-2 w-full text-xs border-slate-300 font-open focus:outline-none focus:border-blue text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                            />
                          </div>
                        </div>
                        <div>
                          <textarea
                            name="description"
                            id="description"
                            value={passwordDescriptionUpdate}
                            onChange={(e) =>
                              setPasswordDescriptionUpdate(e.target.value)
                            }
                            cols="30"
                            rows="5"
                            placeholder={passwordDescriptionView}
                            className="w-full border p-2 rounded-xs border-slate-300 text-xs font-open focus:outline-none focus:border-blue resize-none text-black dark:bg-[#111] dark:text-slate-200 dark:border dark:border-slate-600"
                          ></textarea>
                        </div>
                        {updateIsLoading ? (
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
                    <div className="mt-10 mb-5">
                      <p className="text-xs mb-2">
                        <span className="text-red-600">
                          Are you sure you want to delete ?
                        </span>{" "}
                        Type{" "}
                        <span className="italic font-bold">
                          {passwordLabelView}
                        </span>{" "}
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
                            onChange={(e) =>
                              setDeletePasswordLabel(e.target.value)
                            }
                          />
                        </div>
                        {deleteIsLoading ? (
                          <div className="flex float-right">
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
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Navigate replace to="/signin" />
      )}
    </>
  );
};

export default Categories;
