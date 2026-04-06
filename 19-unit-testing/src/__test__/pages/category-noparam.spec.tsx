import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
  }),
}));
import CategoryPage from "@/pages/category/[[...slug]]";

describe("CategoryPage no param", () => {
  it("renders category page with no param", () => {
    render(<CategoryPage />);
    expect(screen.getByText("No parameter")).toBeInTheDocument();
  });
});
