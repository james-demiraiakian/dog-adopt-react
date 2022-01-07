import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditDog from '../components/EditDog/EditDog';
import { deleteDog, getDogById, updateDog } from '../services/dogs';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);

      setName(data.name);
      setAge(data.age);
      setBreed(data.breed);
      setBio(data.bio);
      setImage(data.image);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(params.id, name, bio, age, image, breed);
      setMessage('Dog Updated Sucessfully');

      setTimeout(() => {
        history.push(`/dogs/${params.id}`);
      }, 3000);
    } catch {
      setMessage('Something Went Wrong');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDog(params.id);
      setMessage('Dog Sucessfully Deleted');

      setTimeout(() => {
        history.push('/');
      }, 3000);
    } catch {
      setMessage('Something went wrong.');
    }
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
        handleDelete={handleDelete}
      />
      <h1>{message}</h1>
    </div>
  );
}
