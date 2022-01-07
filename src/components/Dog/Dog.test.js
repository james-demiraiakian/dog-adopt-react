import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dog from './Dog';

test('<Dog /> should render doggo info', () => {
  const { container } = render(
    <MemoryRouter>
      <Dog age="100" bio="hfdjska fhjdk hfjdksl" breed="Doggo" name="Blarg" image="qwop" />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
