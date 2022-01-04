import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDogs } from '../services/dogs';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogs();
      setDogs(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="dog-list">
      {dogs.map((d) => (
        <Link key={d.id} to={`/dogs/${d.id}`}>
          {d.name}
        </Link>
      ))}
    </div>
  );
}
