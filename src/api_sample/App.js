import React from 'react';
import Users from "./components/UsersE";
import {UsersProvider} from "./components/UsersContextA";

function App(props) {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}

export default App;