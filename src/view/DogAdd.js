import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function DogAdd() {
  const [dog, setDog] = useState({});

  const params = useParams();
  const history = useHistory();

  return <div></div>;
}
