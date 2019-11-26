import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import MapPage from './pages/MapPage';
import RestaurantPageInfo from './pages/RestaurantPageInfo/RestaurantPageInfo';
import RestaurantListViewPage from './pages/RestaurantListViewPage';
import NavBar from './components/NavBar/NavBar';

import DataContextWrapper from './context/DataContextWrapper';

export default function App() {
  return (
    <DataContextWrapper>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/restaurant-info" component={RestaurantPageInfo} />
            <Route path="/restaurant-list" component={RestaurantListViewPage} />
            <Route path="/" component={MapPage} />
          </Switch>
          <NavBar />
        </div>
      </BrowserRouter>
    </DataContextWrapper>
  );
}
