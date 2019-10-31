import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.scss';
import MapPage from './pages/MapPage';
import RestaurantPageInfo from './pages/RestaurantPageInfo/RestaurantPageInfo';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/restaurant-info" component={RestaurantPageInfo} />
          <Route path="/" component={MapPage} />
        </Switch>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}