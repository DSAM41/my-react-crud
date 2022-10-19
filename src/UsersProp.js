import { Link } from "react-router-dom";

export default function UsersProp(props) {
  return (
    <div class="card">
      <img src={props.avatar} />
      <div class="card-body">
        <h5 class="card-title">
          {props.fname} {props.lname}
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/usershow/${props.id}`}>
          <button class="btn btn-primary">view profile</button>
        </Link>
      </div>
    </div>
  );
}
{
  /* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */
}
// style="width: 18rem;"
{
  /* <div>
      <p>{props.fname}</p>
      <p>{props.lname}</p>
      <p>{props.username}</p>
      <Link to={`/usershow/${props.id}`}>
        <button variant="contained" color="primary">
          Show
        </button>
      </Link>
    </div> */
}
