import { client, checkError } from './client';

export async function getDogs() {
  const request = await client.from('dogs').select().order('id');
  return checkError(request);
}

export async function getDogById(id) {
  const request = await client.from('dogs').select().match({ id: id }).single();
  return checkError(request);
}
