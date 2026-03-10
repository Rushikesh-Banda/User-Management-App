import { useEffect, useState } from "react";
import {useNavigate} from 'react-router'

function UserList() {
  let [users, setUsers] = useState([]);
  let navigate=useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:4000/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          //extract json data
          let resObj = await res.json();
          //update the state
          setUsers(resObj.payload);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }

    getUsers();
  }, []);


  //go to user
  const gotoUser=(userObj)=>{
    navigate("/user",{state:{user:userObj}})
  }

  return (
    <div>
      <h1 className="text-5xl  text-gray-600">List of Users</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 gap-5 ">
        {users?.map((userObj) => (
          <div key={userObj.email} className="p-10 shadow-2xl cursor-pointer" onClick={()=>gotoUser(userObj)}>
            <p className="text-3xl">{userObj.name}</p>
            <p className="text-2xl">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;