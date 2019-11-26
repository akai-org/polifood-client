import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import './App.scss';
import MapPage from './pages/Map/MapPage';
import RestaurantPageInfo from './pages/RestaurantPageInfo/RestaurantPageInfo';
import RestaurantListViewPage from './pages/RestaurantListViewPage';
import NavBar from './components/NavBar/NavBar';
import Listing from './pages/Listing/Listing';
import Favourites from './pages/Favourites/Favourites';
import Menu from './pages/Menu/Menu';

import DataContextWrapper from './context/DataContextWrapper';

export default function App() {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translate(100%, 0)' },
    enter: { transform: 'translate(0%, 0)' },
    leave: { transform: 'translate(-100%, 0)' }
  });

  const routes = [
    { path: '/places/:id/menu', component: Menu },
    { path: '/places/:id', component: RestaurantPageInfo },
    { path: '/places', component: Listing },
    { path: '/favourites', component: Favourites },
    { path: '/', component: MapPage }
  ];

  return (
    <DataContextWrapper>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </animated.div>
      ))}
      <NavBar />
    </DataContextWrapper>
  );
}
