import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";

import { Home } from "./components/Home";
import { UserIndex } from "./components/users/UserIndex";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";
import { UserShow } from "./components/users/UserShow";

function App() {
  return (
    <UserProvider>
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserIndex />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path="/users/:id/edit" element={<UserEdit />} />
            <Route path="/users/:id/show" element={<UserShow />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
