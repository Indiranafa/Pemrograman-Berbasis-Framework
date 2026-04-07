import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
  }),
}));
import Kategori from "@/pages/produk";

describe("Kategori (ProdukPage)", () => {
  it("renders produk page and TampilanProduk", () => {
    render(<Kategori />);
    expect(screen.getByText(/Daftar Produk|Produk/i)).toBeInTheDocument();
  });
});
