import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditDog from '../components/EditDog/EditDog';
import { getDogById, updateDog } from '../services/dogs';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);

      setName(data.name);
      setAge(data.age);
      setBreed(data.breed);
      setBio(data.bio);
      setImage(data.image);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(params.id, name, bio, age, image, breed);
  };

  return (
    <div>
      <h2>Edit Dog</h2>
      <EditDog
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
    </div>
  );
}
