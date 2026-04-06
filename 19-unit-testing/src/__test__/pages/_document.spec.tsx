import { render } from '@testing-library/react';
import Document from '../../pages/_document';

describe('_document Page', () => {
  it('renders without crashing', () => {
    render(<Document />);
  });
});