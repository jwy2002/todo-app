import React, {useEffect} from 'react';
import {getUser, useUsersDispatch, useUsersState} from "./UsersContextA";

function UserE({id}) {
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    useEffect(()=> {
        getUser(dispatch, id).then(r => console.log('getUser End'));
    }, [dispatch, id]);

    const { data: user, loading, error } = state.user;

    if( loading ) return <div> Loading </div>;
    if( error ) return <div> Error Occor </div>;
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

export default UserE;