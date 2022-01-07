import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogDetails from './DogDetails';

test('should render a dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/4']}>
      <Route path="/dogs/:id" component={DogDetails} />
    </MemoryRouter>
  );

  await screen.findByText('Molly');

  expect(container).toMatchSnapshot();
});
