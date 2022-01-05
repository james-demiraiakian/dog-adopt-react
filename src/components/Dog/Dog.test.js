import { render } from '@testing-library/react';
import Dog from './Dog';

test('<Dog /> should render doggo info', () => {
  const { container } = render(
    <Dog age="100" bio="hfdjska fhjdk hfjdksl" breed="Doggo" name="Blarg" image="qwop" />
  );

  expect(container).toMatchSnapshot();
});
