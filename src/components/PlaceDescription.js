import React from 'react'
import ReactStars from 'react-stars';
import './PlaceDescription.scss'

export default function PlaceDescription (props) {
  return (
    <div className="content">
        <h2 className="title">{props.name}</h2>
        <p className="text address">
          {props.address}
        </p>

        <ReactStars
          count={5}
          size={30}
          half={false}
          edit={false}
          value={props.rating}
          color2={'#ffcc61'}
        />

        <p className="text">
          {props.description}
        </p>
      </div>
  )
}