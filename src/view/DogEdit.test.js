import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogEdit from './DogEdit';

test('should render the edit page', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/5/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );

  await screen.findByDisplayValue('Caroline');

  expect(container).toMatchSnapshot();
});
