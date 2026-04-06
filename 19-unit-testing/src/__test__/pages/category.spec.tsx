import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
  }),
}));
import CategoryPage from "@/pages/category/[[...slug]]";

describe("CategoryPage", () => {
  it("renders category page and default text", () => {
    render(<CategoryPage />);
    expect(screen.getByText("Category Page")).toBeInTheDocument();
    expect(screen.getByText("No parameter")).toBeInTheDocument();
  });
});
