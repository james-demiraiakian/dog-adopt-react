import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../components/Dogs/Dogs';
import { getDogs } from '../services/dogs';
import './DogList.css';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
    };
    fetchData();
    setLoading(false);
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div className="dog-list">
      {dogs.map((d) => (
        <Link key={d.id} to={`/dogs/${d.id}`}>
          <Dogs {...d} />
        </Link>
      ))}
    </div>
  );
}
