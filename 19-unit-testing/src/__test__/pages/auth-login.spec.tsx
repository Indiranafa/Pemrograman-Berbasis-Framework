import { render } from '@testing-library/react';
import AuthLogin from '../../pages/auth/login';

describe('Auth Login Page', () => {
  it('renders without crashing', () => {
    render(<AuthLogin />);
  });
});