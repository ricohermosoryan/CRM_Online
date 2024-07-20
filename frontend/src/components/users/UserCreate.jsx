import { useContext, useEffect } from "react";
import UserContext from "../../Context/UserContext";

export const UserCreate = () => {
  const { formValues, onChange, storeUser, errors, setErrors } =
    useContext(UserContext);
  useEffect(() => {
    setErrors({});
  }, []);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeUser}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium"
            >
              First Name
            </label>
            <input
              name="first_name"
              value={formValues["first_name"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.first_name && (
              <span className="text-sm text-red-400">
                {errors.first_name[0]}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium"
            >
              Last Name
            </label>
            <input
              name="last_name"
              value={formValues["last_name"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.last_name && (
              <span className="text-sm text-red-400">
                {errors.last_name[0]}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              value={formValues["email"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.email && (
              <span className="text-sm text-red-400">{errors.email[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact_number"
              className="block mb-2 text-sm font-medium"
            >
              Contact Number
            </label>
            <input
              name="contact_number"
              value={formValues["contact_number"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.contact_number && (
              <span className="text-sm text-red-400">
                {errors.contact_number[0]}
              </span>
            )}
          </div>
        </div>
        <div className="my-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
