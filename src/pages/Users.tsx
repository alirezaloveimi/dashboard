import { useState, useEffect } from "react";

// components
import Table from "../components/Table";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Modal from "../components/Modal";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  addNewUser,
  deleteUser,
  getUsers,
  updateUser,
  User,
} from "../redux/features/users";

// datas , utiles , icons
import { projectsTableItems } from "../data/datas";
import { numberWithCommas } from "../utils/funcs";
import { icons } from "../data/icons";

type updatedUserStateType = {
  id: null | number;
  name: string;
  family: string;
  email: string;
};

const Users = () => {
  // modals states
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [updatedUser, setUpdatedUser] = useState<updatedUserStateType>({
    id: null,
    name: "",
    family: "",
    email: "",
  });
  const [addUserInputs, setAddUserInputs] = useState({
    name: "",
    family: "",
    email: "",
  });

  const [userId, setUserId] = useState<number | null>(null);

  const { errorMessage, users, loading } = useAppSelector(
    (state) => state.users
  );
  const {
    userInfo: { role },
  } = useAppSelector((state) => state.userAuth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // edit functions
  const toggleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const showEditHandler = (userInfo: User) => {
    toggleShowEditModal();

    setUpdatedUser({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      family: userInfo.family,
    });
  };
  const updateUserSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    await dispatch(
      updateUser(updatedUser as updatedUserStateType & { id: number })
    );
    setUpdatedUser({ email: "", family: "", id: null, name: "" });
    toggleShowEditModal();
  };

  // delete functions
  const toggleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const showDeleteHandler = (id: number) => {
    toggleShowDeleteModal();
    setUserId(id);
  };
  const deleteUserHandler = async () => {
    await dispatch(deleteUser(userId as number));
    setUserId(null);
    toggleShowDeleteModal();
  };

  // add new user functions
  const toggleShowAddModal = () => {
    setShowAddModal(!showAddModal);
  };
  const addNewUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isInputsValid = Object.values({ ...addUserInputs }).every(
      (item) => item
    );

    if (!isInputsValid) {
      return;
    }

    await dispatch(addNewUser(addUserInputs));
    setAddUserInputs({ email: "", family: "", name: "" });
    toggleShowAddModal();
  };

  return (
    <>
      <main>
        <Card>
          <h2 className="sm:text-lg md:text-xl mb-8">All Users</h2>

          {role === "ADMIN" && (
            <div className="text-end mb-4">
              <button
                onClick={toggleShowAddModal}
                type="button"
                className="bg-primary px-6 py-2 rounded-xl text-sm"
              >
                Add New User
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-red-600 rounded-xl">{errorMessage}</div>
          )}

          <Table headerTitles={["ID", "NAME", "FAMILY", "EMAIL"]}>
            {loading &&
              !users &&
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="border-b border-secondary">
                    <td className="p-4 pl-0">
                      <div className="skeleton"></div>
                    </td>
                    <td className="p-4">
                      <div className="skeleton"></div>
                    </td>
                    <td className="p-4">
                      <div className="skeleton"></div>
                    </td>
                    <td className="p-4">
                      <div className="skeleton"></div>
                    </td>
                    <td className="p-4">
                      <div className="skeleton"></div>
                    </td>
                  </tr>
                ))}

            {users &&
              users.map((item) => (
                <tr key={item.id} className="border-b border-secondary capitalize">
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.family}</td>
                  <td className="p-4">{item.email}</td>
                  {role === "ADMIN" && (
                    <td className="p-4 flex-align-center gap-x-3">
                      <button
                        onClick={() => showEditHandler(item)}
                        type="button"
                        className="size-8 grid-center bg-orange-600 text-white rounded-full"
                      >
                        {icons.edit}
                      </button>
                      <button
                        onClick={() => showDeleteHandler(item.id)}
                        type="button"
                        className="size-8 grid-center bg-red-600 text-white rounded-full"
                      >
                        {icons.delete}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </Table>
        </Card>

        <Card otherClasses="lg:col-span-2 mt-6">
          <h3 className="text-base sm:text-lg md:text-xl mb-1.5">Projects</h3>
          <p className="text-secondary text-xs mb-5">
            <span className="font-bold">30 Done</span> This Month
          </p>

          <Table headerTitles={["COMPANIES", "BUDGET", "COMPLETION"]}>
            {projectsTableItems.map((item) => (
              <tr key={item.id} className="border-b border-secondary">
                <td className="flex-align-center gap-x-3 p-4 lg:p-3">
                  <span className="text-lg" style={{ color: item.iconColor }}>
                    {item.icon}
                  </span>
                  <span>{item.companies}</span>
                </td>
                <td className="p-4 lg:p-3">
                  {item.budget > 0
                    ? "$" + numberWithCommas(item.budget)
                    : "Not Set"}
                </td>
                <td className="p-4 lg:p-3">
                  <ProgressBar width={item.completion} />
                </td>
              </tr>
            ))}
          </Table>
        </Card>
      </main>

      <Modal
        show={showEditModal}
        onClose={toggleShowEditModal}
        title="Edit User Information"
      >
        <form onSubmit={updateUserSubmitHandler} className="space-y-4">
          <input
            value={updatedUser.name}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, name: e.target.value })
            }
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={updatedUser.family}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, family: e.target.value })
            }
            type="text"
            placeholder="Enter Your Family"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={updatedUser.email}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, email: e.target.value })
            }
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />

          <div className="w-full text-right ">
            <button
              type="submit"
              className="px-5 py-1 bg-primary rounded-lg text-sm font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        title="Delete User"
        show={showDeleteModal}
        onClose={toggleShowDeleteModal}
      >
        <div className="flex-align-center flex-col gap-y-4 mb-4">
          <span className="text-red-700 text-6xl">{icons.alert}</span>
          <p>Do You Want To Delete This User ? </p>
        </div>

        <div className="flex-align-center gap-x-3 [&>*]:flex-1">
          <button
            onClick={toggleShowDeleteModal}
            type="button"
            className="bg-red-700 py-2 rounded-xl"
          >
            No
          </button>
          <button
            onClick={deleteUserHandler}
            type="button"
            className="bg-primary py-2 rounded-xl"
          >
            Yes
          </button>
        </div>
      </Modal>

      <Modal
        show={showAddModal}
        onClose={toggleShowAddModal}
        title="Add New User"
      >
        <form onSubmit={addNewUserHandler} className="space-y-4">
          <input
            value={addUserInputs.name}
            onChange={(e) =>
              setAddUserInputs({ ...addUserInputs, name: e.target.value })
            }
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={addUserInputs.family}
            onChange={(e) =>
              setAddUserInputs({ ...addUserInputs, family: e.target.value })
            }
            type="text"
            placeholder="Enter Your Family"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />
          <input
            value={addUserInputs.email}
            onChange={(e) =>
              setAddUserInputs({ ...addUserInputs, email: e.target.value })
            }
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded-xl border border-[#2d3748] text-xs md:text-sm"
          />

          <div className="w-full text-right ">
            <button
              type="submit"
              className="px-5 py-1 bg-primary rounded-lg text-sm font-bold"
            >
              Create New User
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Users;
