import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from "./UserD";

// useAsync 에서는 Promise의 결과를 바로 data에 담기 때문에,
// 요청을 한 이후에 response에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data
}

function UsersD(props) {

    const [userId, setUserId] = useState(null);
    const { data: users, error, isLoading, reload } = useAsync({
        promiseFn: getUsers
    });

    if( isLoading ) return <div>로딩중...</div>;
    if( error ) return <div>에러가 발생하였습니다.</div>;
    if( !users ) return <button onClick={reload}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={reload}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}
export default UsersD;