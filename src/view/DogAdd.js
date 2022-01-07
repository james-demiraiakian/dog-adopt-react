import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addDog } from '../services/dogs';
import AddDog from '../components/AddDog/AddDog';

export default function DogAdd() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog(name, bio, age, image, breed);
      setMessage('Dog Arrived Safely');

      setTimeout(() => {
        history.push('/');
      }, 3000);
    } catch {
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Add Dog</h2>
      <AddDog
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        age={age}
        setAge={setAge}
        image={image}
        setImage={setImage}
        breed={breed}
        setBreed={setBreed}
        handleSubmit={handleSubmit}
      />
      <h1>{message}</h1>
    </div>
  );
}
