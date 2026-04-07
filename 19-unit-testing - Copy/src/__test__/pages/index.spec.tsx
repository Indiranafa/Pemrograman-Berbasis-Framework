import { render } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});