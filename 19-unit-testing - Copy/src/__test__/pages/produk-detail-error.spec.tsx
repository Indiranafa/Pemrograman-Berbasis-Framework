import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: "1" },
    push: jest.fn(),
  }),
}));
jest.mock('swr', () => () => ({
  data: null,
  error: true,
}));
import ProdukDetailPage from "@/pages/produk/[id]";

describe("ProdukDetailPage error", () => {
  it("renders error state", () => {
    render(<ProdukDetailPage />);
    expect(screen.getByText(/Terjadi kesalahan/)).toBeInTheDocument();
  });
});
