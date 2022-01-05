import React from 'react';
import './Dogs.css';

export default function Dogs(props) {
  return (
    <div className="dog-crate">
      <img className="image" src={props.image} />
      <h3>{props.name}</h3>
    </div>
  );
}
