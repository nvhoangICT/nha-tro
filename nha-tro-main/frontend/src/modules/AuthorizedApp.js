import { Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from '../pages/Home';
const AuthorizedApp = ({ handleLogout, user }) => {
    return (
        <div>
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
            </Routes>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}


export default AuthorizedApp;