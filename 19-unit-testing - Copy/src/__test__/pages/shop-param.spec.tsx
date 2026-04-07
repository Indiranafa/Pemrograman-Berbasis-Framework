import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { slug: ["elektronik"] },
    push: jest.fn(),
  }),
}));
import HalamanToko from "@/pages/shop/[[...slug]]";

describe("HalamanToko with params", () => {
  it("renders shop page with category param", () => {
    render(<HalamanToko />);
    expect(screen.getByText("Halaman Toko")).toBeInTheDocument();
    expect(screen.getByText(/Kategori:/)).toBeInTheDocument();
    expect(screen.getByText(/Kategori:\s*elektronik/)).toBeInTheDocument();
  });
});
