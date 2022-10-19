import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function UserUpdate() {
    const { id } = useParams();
    useEffect(() => {
        fetch("https://www.mecallapi.com/api/users/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setFname(result.user.fname)
                    setLname(result.user.lname)
                    setUsername(result.user.username)
                    setEmail(result.user.email)
                    setAvatar(result.user.avatar)
                }
            )
    }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'id': id,
            'fname': fname,
            'lname': lname,
            'username': username,
            'email': email,
            'avatar': avatar,
        }
        fetch('https://www.mecallapi.com/api/users/update', {
            method: 'PUT',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result['message'])
                    if (result['status'] === 'ok') {
                        window.location.href = '/';
                    }
                }
            )
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First name:</label><br />
                <input id="firstName" onChange={(e) => setFname(e.target.value)} value={fname}></input><br />
                <label>Last name:</label><br />
                <input onChange={(e) => setLname(e.target.value)} value={lname}></input><br /><br />
                <label>Username:</label><br />
                <input onChange={(e) => setUsername(e.target.value)} value={username}></input><br /><br />
                <label>Email:</label><br />
                <input onChange={(e) => setEmail(e.target.value)} value={email}></input><br /><br />
                <label>Avatar:</label><br />
                <input onChange={(e) => setAvatar(e.target.value)} value={avatar}></input><br /><br />
                <input type="submit" value="Submit"></input>
            </form>
            <Link to={`/`}>
                <button variant="contained" color="primary">
                    Back
                </button>
            </Link>
        </div>
    )
}
