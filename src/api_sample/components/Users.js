import React, { useState, useEffect } from 'react';
import axios from "axios";

function Users(props) {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);

            // loading 상태를 true 로 바꿉니다.
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );

            // 데이터는 response.data 안에 들어있습니다.
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers().then(r => console.log('fetchUsers END'));
    }, []);

    if( loading ) return <div>로딩중..</div>;
    if( error ) return <div>에러가 발생했습니다.</div>;
    if( !users ) return null;

    return (
        <>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;