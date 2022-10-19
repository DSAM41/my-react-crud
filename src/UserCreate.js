import { useState } from "react";
import { Link } from "react-router-dom";
export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    };
    fetch("https://www.mecallapi.com/api/users/create", {
      method: "POST",
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
          window.location.href = "/";
        }
      });
  };

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <div className="App container-fluid mt-3">
      <Link to={`/`}>
        <button type="submit" class="btn btn-dark">
          Back
        </button>
      </Link>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>First name:</label>
          <input
            class="form-control"
            onChange={(e) => setFname(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label>Last name:</label>
          <input
            class="form-control"
            onChange={(e) => setLname(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label>Username:</label>
          <input
            class="form-control"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label>email:</label>
          <input
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label>Avatar:</label>
          <input
            class="form-control"
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
