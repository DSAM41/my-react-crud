import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersProp from "./UsersProp";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet();
  }, []);

  const UsersGet = () => {
    fetch("https://www.mecallapi.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  return (
    <div className="App container-fluid  mt-3">
      <Link to="/create">
        <button type="button" class="btn btn-outline-primary">
          CREATE
        </button>
      </Link>
      <br></br><br></br>
      <div class="row">
        {users.map((user) => {
          return (
            <div class="col-sm-2">
              <UsersProp
                fname={user.fname}
                lname={user.lname}
                username={user.username}
                id={user.id}
                avatar={user.avatar}
              />
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// const UserShow = id => {
//     window.location = '/usershow/' + id
// }

// <div>
//     <p>{user.fname}</p>
//     <p>{user.lname}</p>
//     <p>{user.username}</p>
//     <Link to={`/usershow/${user.id}`}>
//         <button variant="contained" color="primary">
//             Show
//         </button>
//     </Link>
//     {/* <button onClick={() => UserShow(user.id)}>Show</button> */}
// </div>
