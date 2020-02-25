import React from 'react';
import Home from './component/Home';
import UsersList, { loadData } from './component/UsersList';
// react router config
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {   
        loadData,
        path: '/users',
        component: UsersList
    }
];
