import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

export default function Dog({ id, age, bio, breed, name, image }) {
  return (
    <div className="dog-detail">
      <h2>{name}</h2>
      <img className="dog-detail-image" src={image} />
      <h4>Age: {age}</h4>
      <h4>Breed: {breed}</h4>
      <h4>Bio: {bio}</h4>
      <Link to={`/dogs/${id}/edit`}>Edit</Link>
    </div>
  );
}
