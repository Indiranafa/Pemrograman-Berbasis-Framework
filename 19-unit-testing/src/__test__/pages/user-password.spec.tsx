import { render } from '@testing-library/react';
import UserPassword from '../../pages/user/password';

describe('User Password Page', () => {
  it('renders without crashing', () => {
    render(<UserPassword />);
  });
});