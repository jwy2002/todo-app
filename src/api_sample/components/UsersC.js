import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from "./UserD";

// useAsync 에서는 Promise의 결과를 바로 data에 담기 때문에,
// 요청을 한 이후에 response에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data
}

function UsersC(props) {

    const [userId, setUserId] = useState(null);
    const [state, refetch] = useAsync(getUsers, [], true);

    // state.data를 user 키워드로 조회
    const { loading, data: users, error } = state;

    if( loading ) return <div>로딩중...</div>;
    if( error ) return <div>에러가 발생하였습니다.</div>;
    if( !users ) return <button onClick={refetch}>불러오기</button>;

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
            <button onClick={refetch}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}

export default UsersC;