import { render } from '@testing-library/react';
import ProdukStatic from '../../pages/produk/static';

describe('Produk Static Page', () => {
  it('renders without crashing', () => {
    render(<ProdukStatic />);
  });
});