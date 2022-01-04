import React from 'react';

export default function Dog({ age, bio, breed, name, image }) {
  return (
    <div className="dog-detail">
      <h3>{name}</h3>
      <img className="dog-detail-image" src={image} />
      <h5>Age: {age}</h5>
      <h5>Breed: {breed}</h5>
      <h5>Bio: {bio}</h5>
    </div>
  );
}
