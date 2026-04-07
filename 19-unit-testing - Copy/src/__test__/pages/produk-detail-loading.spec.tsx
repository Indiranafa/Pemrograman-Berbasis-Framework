import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: "1" },
    push: jest.fn(),
  }),
}));
jest.mock('swr', () => () => ({
  data: null,
  error: null,
}));
import ProdukDetailPage from "@/pages/produk/[id]";

describe("ProdukDetailPage loading", () => {
  it("renders loading state", () => {
    render(<ProdukDetailPage />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
