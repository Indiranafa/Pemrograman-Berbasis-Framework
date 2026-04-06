import { render } from '@testing-library/react';
import ProdukDetail from '../../pages/produk/[id]';

describe('Produk Detail Page', () => {
  it('renders without crashing', () => {
    render(<ProdukDetail />);
  });
});