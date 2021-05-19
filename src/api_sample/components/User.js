import React from 'react';
import axios from "axios";
import useAsync from "./useAsync";

async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User({ id }) {

    const [state, fetchData] = useAsync(() => getUser(id), [id]);

    // state.data를 user 키워드로 조회
    const { loading, data: user, error } = state;

    if( loading ) return <div>로딩중...</div>;
    if( error ) return <div>에러가 발생하였습니다.</div>;
    if( !user ) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
            <button onClick={fetchData}>다시조회</button>
        </div>
    );
}

export default User;