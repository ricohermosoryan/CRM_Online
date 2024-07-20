import { useEffect, useContext } from "react";
import UserContext from "../../Context/UserContext";
import { useParams } from "react-router-dom";

export const UserShow = () => {
  const { errors, setErrors, user, getUser } = useContext(UserContext);
  let { id } = useParams();

  useEffect(() => {
    getUser(id);
    setErrors({});
  }, []);
  return (
    <div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {user.first_name}
          {"   "}
          {user.last_name}
        </h5>
        <p className="font-normal text-gray-700 ">
          {user.email}
          <br />
          {user.contact_number}
        </p>
      </div>
    </div>
  );
};
