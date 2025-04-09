import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
        <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
};

export default AppRouter;
