import React from 'react';
import './RestaurantMenu.scss'

export default function (props) {
  return (
    <div>
      <h1 className="main-title">Menu</h1>
      <p>{props.restaurantName}</p>

      <ul className="categories-list">
        {props.menu.map((category, categoryIndex) => (
          <li className="category">
            <h2 className="category-name">{category.name}</h2>
            <ul className="dishes-list">
              {category.dishes.map((dish, dishIndex) => (
                <li className="dish">
                  <div className="dish-name">
                    {dish.name}
                  </div>
                  <div className="dots"></div>
                  <div>
                    {dish.price} {dish.currency}
                  </div>
                </li>
              ))}
            </ul>
        </li>  
        ))} 
      </ul>
    </div>
  )
}