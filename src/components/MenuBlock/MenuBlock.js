import React from 'react';
import './MenuBlock.scss';

import MenuCard from './MenuCard';
import RestaurantMenu from '../RestaurantMenu/RestaurantMenu';

const MenuBlock = ({ menuData = [] } = {}) => {
  // function to choose only 3 random/first types of food
  const chooseThreeTypes = menuData => menuData.slice(0, 3);

  const threeTypes = chooseThreeTypes(menuData);

  return (
    <>
      <div className="menu">
        <div className="menu__header">
          <h1 className="menu__h1">Menu</h1>
          <h2 className="menu__h2">Zobacz więcej</h2>
        </div>
        <div className="menu__body">
          {threeTypes.map(type => (
            <MenuCard foodType={type.foodType} itemImgUrl={type.thumbnail} />
          ))}
        </div>
      </div>

      <RestaurantMenu
        restaurantName="Stołówka studencka"
        menu={[
          {
            name: 'Zupy',
            dishes: [
              {name: 'gulaszowa', price: '7', currency: 'PLN'},
              {name: 'pomidorowa', price: '6', currency: 'PLN'},
              {name: 'krupnik', price: '10', currency: 'PLN'},
              {name: 'krem z kalafiora', price: '11', currency: 'PLN'}
            ]
          },
          {
            name: 'Naleśniki',
            dishes: [
              {name: 'gulaszowa', price: '7', currency: 'PLN'},
              {name: 'pomidorowa', price: '6', currency: 'PLN'},
              {name: 'krupnik', price: '10', currency: 'PLN'},
              {name: 'krem z kalafiora', price: '11', currency: 'PLN'}
            ]
          },
          {
            name: 'Dania orientalne',
            dishes: [
              {name: 'gulaszowa', price: '7', currency: 'PLN'},
              {name: 'pomidorowa', price: '6', currency: 'PLN'},
              {name: 'krupnik', price: '10', currency: 'PLN'},
              {name: 'krem z kalafiora', price: '11', currency: 'PLN'}
            ]
          }
        ]}
      />
    </>
  );
};

export default MenuBlock;
