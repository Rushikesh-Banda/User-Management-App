import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-pink-300 py-5">
      <img className="rounded-full" width="80px" src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="" />
      <ul className="flex gap-6 text-2xl">
       <h1 className="text-3xl font-bold text-gray-800 flex-6 text-left">
        User Management App
      </h1>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "bg-gray-500 text-lime-50 rounded-xl p-2 shadow" : "")}>
            Home
          </NavLink>
        

        </li>
        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) => (isActive ? "bg-gray-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            AddUser
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/userslist"
            className={({ isActive }) => (isActive ? "bg-gray-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            UsersList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;