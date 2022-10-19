import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserShow() {
  const UserDelete = (id) => {
    var data = {
      id: id,
    };

    fetch("https://www.mecallapi.com/api/users/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          // UsersGet();
          window.location.href = "/";
        }
      });
  };

  const { id } = useParams();
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        setFname(result.user.fname);
        setLname(result.user.lname);
        setUsername(result.user.username);
        setEmail(result.user.email);
        setAvatar(result.user.avatar);
      });
  }, [id]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <div>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{username}</p>
      <p>{email}</p>
      <img src={avatar} />
      <Link to={`/`}>
        <button variant="contained" color="primary">
          Back
        </button>
      </Link>
      <Link to={`/useredit/${id}`}>
        <button variant="contained" color="primary">
          Edit
        </button>
      </Link>

      <button onClick={() => UserDelete(id)}>Delete</button>
    </div>
  );
}

{
  /* <button onClick={() => BackUser()}>Back</button> */
}

{
  /* <button onClick={() => UserEdit(id)}>Edit</button> */
}

// const BackUser = () => {
//     window.location = '/'
// }

// const UserEdit = id => {
//     window.location = '/useredit/' + id
// }
