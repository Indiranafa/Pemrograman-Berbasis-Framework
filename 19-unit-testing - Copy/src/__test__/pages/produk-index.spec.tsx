import { render } from '@testing-library/react';
import Produk from '../../pages/produk/index';

describe('Produk Page', () => {
  it('renders without crashing', () => {
    render(<Produk />);
  });
});