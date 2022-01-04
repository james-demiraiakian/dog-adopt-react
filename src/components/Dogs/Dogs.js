import React from 'react';
import DogList from '../../view/DogList';
import './Dogs.css';

export default function Dogs(props) {
  return (
    <div>
      <img className="image" src={props.image} />
      <h4>{props.name}</h4>
    </div>
  );
}
