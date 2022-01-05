import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogList from './DogList';

test('should render a list of dogs', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/" component={DogList} />
    </MemoryRouter>
  );

  await screen.findByText('Eyes', 'Althea');

  expect(container).toMatchSnapshot();
});
