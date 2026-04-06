import '@testing-library/jest-dom';
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
  }),
}));
import { render, screen } from "@testing-library/react";
import HalamanToko from "@/pages/shop/[[...slug]]";

describe("halamanToko", () => {
  it("renders shop page and category", () => {
    render(<HalamanToko />);
    expect(screen.getByText("Halaman Toko")).toBeInTheDocument();
    expect(screen.getByText(/Kategori:/i)).toBeInTheDocument();
  });
});
