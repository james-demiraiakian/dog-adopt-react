import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dog from '../components/Dog/Dog';
import { getDogById } from '../services/dogs';

export default function DogDetails() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h1>LOADING</h1>;

  return <Dog {...dog} />;
}
