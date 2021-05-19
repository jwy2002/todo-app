import React from 'react';
import axios from "axios";
import { useAsync} from "react-async";

async function getUser({id}) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log('getUser===',id);
    return response.data;
}

function UserD({id}) {
    const { data:user, error, isLoading } = useAsync({
        promiseFn: getUser,
        id,
        watch: id
    });

    if( isLoading ) return <div>Loading ...</div>;
    if( error ) return <div> Error Occur</div>;
    if( !user ) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
}

export default UserD;