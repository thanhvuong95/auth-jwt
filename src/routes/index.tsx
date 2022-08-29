import React, { FC, Fragment, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayout from '../pages/Layout';
import Login from '../pages/Login';

interface IRoute {
  path: string;
  component: JSX.Element;
  layout?: FC<{ children: ReactNode }> | null;
}
const publicRoutes: IRoute[] = [
  {
    path: '/login',
    component: <Login />,
  },
];
const privateRoutes: IRoute[] = [
  {
    path: '/',
    component: <Home />,
    layout: null,
  },
];

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = false;

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes defined */}
      {publicRoutes.map((route, index) => {
        // add layout for each route
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        return <Route key={index} path={route.path} element={<Layout>{Page}</Layout>} />;
      })}
      {/* private routes defined */}

      {privateRoutes.map((route, index) => {
        return <Route key={index} path={route.path} element={<PrivateRoute>{route.component}</PrivateRoute>} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
