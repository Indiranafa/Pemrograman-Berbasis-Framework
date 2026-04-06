import { render } from '@testing-library/react';
import NotFound from '../../pages/404';

describe('404 Page', () => {
  it('renders without crashing', () => {
    render(<NotFound />);
  });
});