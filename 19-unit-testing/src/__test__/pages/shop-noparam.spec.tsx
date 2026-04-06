import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
  }),
}));
import HalamanToko from "@/pages/shop/[[...slug]]";

describe("HalamanToko no param", () => {
  it("renders shop page with no param", () => {
    render(<HalamanToko />);
    expect(screen.getByText(/Semua Kategori/)).toBeInTheDocument();
  });
});
