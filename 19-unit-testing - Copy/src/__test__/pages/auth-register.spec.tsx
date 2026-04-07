import { render } from '@testing-library/react';
import AuthRegister from '../../pages/auth/register';

describe('Auth Register Page', () => {
  it('renders without crashing', () => {
    render(<AuthRegister />);
  });
});