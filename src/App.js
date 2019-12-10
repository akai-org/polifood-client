import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import MapPage from './pages/Map/MapPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestaurantPageInfo from './pages/RestaurantPageInfo/RestaurantPageInfo';
import NavBar from './components/NavBar/NavBar';
import Listing from './pages/Listing/Listing';
import Favourites from './pages/Favourites/Favourites';
import Menu from './pages/Menu/Menu';
import DataContextWrapper from './context/DataContextWrapper';

export default function App() {
  const routes = [
    { path: '/places/:id/menu', component: Menu },
    { path: '/places/:id', component: RestaurantPageInfo },
    { path: '/places', component: Listing },
    { path: '/favourites', component: Favourites },
    { path: '/', component: MapPage, exact: true },
    { path: '/', component: NotFoundPage }
  ];

  return (
    <DataContextWrapper>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
      <NavBar />
    </DataContextWrapper>
  );
}
