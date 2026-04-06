import { render } from '@testing-library/react';
import Editor from '../../pages/editor';

describe('Editor Page', () => {
  it('renders without crashing', () => {
    render(<Editor />);
  });
});