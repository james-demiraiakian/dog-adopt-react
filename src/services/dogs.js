import { client, checkError } from './client';

export async function getDogs() {
  const request = await client.from('dogs').select().order('id');
  return checkError(request);
}

export async function getDogById(id) {
  const request = await client.from('dogs').select().match({ id: id }).single();
  return checkError(request);
}

export async function updateDog(id, name, bio, age, image, breed) {
  const request = await client.from('dogs').update({ name, bio, age, image, breed }).eq('id', id);
  return checkError(request);
}
export async function addDog(name, bio, age, image, breed) {
  const request = await client.from('dogs').insert({ name, bio, age, image, breed });
  return checkError(request);
}

export async function deleteDog(id) {
  const request = await client.from('dogs').delete.match({ id: id });
  return checkError(request);
}
