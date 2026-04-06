import { render } from '@testing-library/react';
import App from '../../pages/_app';

describe('_app Page', () => {
  it('renders without crashing', () => {
    render(<App Component={() => <div />} pageProps={{}} />);
  });
});