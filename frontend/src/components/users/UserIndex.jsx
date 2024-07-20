import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export const UserIndex = () => {
  const { users, getUsers, deleteUser } = useContext(UserContext);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="mt-12">
      <div className="flex justify-end m-2 p-2">
        <Link
          to={"/users/create"}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New User
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="odd:bg-white  even:bg-gray-50  border-b "
                >
                  <td className="px-6 py-4">{user.first_name}</td>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.contact_number}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`/users/${user.id}/show`}
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-700 text-white rounded-md"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/${user.id}/edit`}
                      className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
