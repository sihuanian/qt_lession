import React from 'react';
import App from './server/App';
import Home from './pages/home/Home';
import Login from './pages/login/Login'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
]
