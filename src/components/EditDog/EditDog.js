import React from 'react';
import './EditDog.css';

export default function EditDog(age, bio, breed, name, image) {
  return (
    <div>
      <form className="dog-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          //   onChange={(e) => {
          //     setAge(e.target.value);
          //   }}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          //   onChange={(e) => {
          //     setBreed(e.target.value);
          //   }}
        />
        <input
          type="text"
          placeholder="Bio"
          value={bio}
          //   onChange={(e) => {
          //     setBio(e.target.value);
          //   }}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          //   onChange={(e) => {
          //     setImage(e.target.value);
          //   }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
