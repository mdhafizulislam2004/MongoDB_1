import { use, useState } from "react";

const Users = ({ Data }) => {
    const User = use(Data)
    const [users,setUsers]=useState(User)
    console.log(User);

    const submitHendaler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;

        const newUser = { name, email }

        console.log("Submitted", name, email);
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log("After Post", data);

            })
        e.target.reset()
    }

    return (
        <div>
            Length:{User.length}
            {
                /* {
                    User.map(UserData=><p key={UserData.id}>Name:{UserData.name}<br/> Emil:{UserData.email}</p>)
                } */
            }

            <form onSubmit={submitHendaler}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <button>Add User</button>
            </form>
        </div>
    );
};

export default Users;