import { render } from '@testing-library/react';
import ProdukServer from '../../pages/produk/server';

describe('Produk Server Page', () => {
  it('renders without crashing', () => {
    render(<ProdukServer />);
  });
});