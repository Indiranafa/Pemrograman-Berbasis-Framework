import { render, screen } from "@testing-library/react";
import ProdukPage from "@/pages/produk";
import ProdukDetailPage from "@/pages/produk/[id]";

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: "1" },
    push: jest.fn(),
  }),
}));
jest.mock('swr', () => () => ({
  data: { id: "1", name: "Produk A", price: 10000, image: "/image-a.jpg", category: "Kategori A" },
  error: null,
}));

describe("ProdukPage", () => {
  it("renders produk page", () => {
    render(<ProdukPage />);
    expect(screen.getByText(/Daftar Produk|Produk/i)).toBeInTheDocument();
  });
});

describe("ProdukDetailPage", () => {
  it("renders produk detail page", () => {
    render(<ProdukDetailPage />);
    expect(screen.getByText(/Detail Produk/i)).toBeInTheDocument();
    expect(screen.getByText(/Produk A/i)).toBeInTheDocument();
  });
});
