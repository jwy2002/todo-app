import React from 'react';
import {NavLink, Link, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    console.log('Profiles');

    const activeStyle = {
        background: 'black',
        color: 'white'
    };

    return (
        <div>
            <h3>사용자 목록: </h3>
            <ul>
                <li><Link to="/profiles/velopert">velopert</Link></li>
                <li><Link to="/profiles/gildong">gildong</Link></li>
            </ul>
            <br/>
            <ul>
                <li><NavLink activeStyle={activeStyle} to="/profiles/velopert">velopert</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/profiles/gildong">gildong</NavLink></li>
            </ul>
            <Route
                path="/profiles"
                exact={true}
                render={() => <div>사용자를 선택해 주세요.</div>}
                />
            <Route path="/profiles/:username" component={Profile} />

            <WithRouterSample />
        </div>
    );
};

export default Profiles;