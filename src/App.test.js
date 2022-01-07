import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Palm Springs Animal Shelter/i);
  await screen.findByText('Geraldineatrice');

  expect(linkElement).toBeInTheDocument();
});
