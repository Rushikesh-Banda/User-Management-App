import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import AddUser from "./components/AddUser";
import UsersList from "./Components/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add-user",
        element: <AddUser />
      },
      {
        path: "/userslist",
        element: <UsersList />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;