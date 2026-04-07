import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { slug: ["kategori-a", "kategori-b"] },
    push: jest.fn(),
  }),
}));
import CategoryPage from "@/pages/category/[[...slug]]";

describe("CategoryPage with params", () => {
  it("renders category page with slug params", () => {
    render(<CategoryPage />);
    expect(screen.getByText("Category Page")).toBeInTheDocument();
    expect(screen.getByText("kategori-a")).toBeInTheDocument();
    expect(screen.getByText("kategori-b")).toBeInTheDocument();
  });
});
