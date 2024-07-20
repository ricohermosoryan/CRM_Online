import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const UserContext = createContext();

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
};

export const UserProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getUsers = async () => {
    const apiUsers = await axios.get("users");
    setUsers(apiUsers.data.data);
  };
  const getUser = async (id) => {
    const response = await axios.get("users/" + id);
    const apiUser = response.data.data;
    setUser(apiUser);
    setFormValues({
      first_name: apiUser.first_name,
      last_name: apiUser.last_name,
      email: apiUser.email,
      contact_number: apiUser.contact_number,
    });
  };

  const storeUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("users", formValues);
      setFormValues(initialForm);
      navigate("/users");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put("users/" + user.id, formValues);
      setFormValues(initialForm);
      navigate("/users");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure")) {
      return;
    }
    await axios.delete("users/" + id);
    getUsers();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        getUser,
        getUsers,
        onChange,
        formValues,
        storeUser,
        errors,
        setErrors,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
