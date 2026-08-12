import { use } from "react";

const Users = ({Data}) => {
    const User=use(Data)
    console.log(User);
    
    return (
        <div>
            Length:{User.length}
        </div>
    );
};

export default Users;