import { render } from '@testing-library/react';
import Profile from '../../pages/profile/index';

describe('Profile Page', () => {
  it('renders without crashing', () => {
    render(<Profile />);
  });
});