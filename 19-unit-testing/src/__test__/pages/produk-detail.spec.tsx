import { render, screen } from "@testing-library/react";
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
import ProdukDetailPage from "@/pages/produk/[id]";

describe("ProdukDetailPage", () => {
  it("renders product detail", () => {
    render(<ProdukDetailPage />);
    expect(screen.getByText("Detail Produk")).toBeInTheDocument();
    expect(screen.getByText("Produk A")).toBeInTheDocument();
    expect(screen.getByText("Kategori A")).toBeInTheDocument();
    expect(screen.getByText(/Rp/)).toBeInTheDocument();
  });
});
