import React from 'react';
import './MenuBlock.scss';
import menuData from './menuData';
import MenuCard from './MenuCard';

const MenuBlock = () => {
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
    </>
  );
};

export default MenuBlock;
