import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogAdd from './DogAdd';

test('should render an empty test page', () => {
  const { container } = render(
    <MemoryRouter>
      <DogAdd />
    </MemoryRouter>
  );

  screen.findByPlaceholderText('Name');

  expect(container).toMatchSnapshot();
});
