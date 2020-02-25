import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
// react router config
export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {   
        ...UsersListPage,
        path: '/users'
    }
];
