import { render, screen } from "@testing-library/react";
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { slug: "contoh-slug" },
    push: jest.fn(),
  }),
}));
import BlogSlug from "@/pages/blog/[slug]";

describe("BlogSlug", () => {
  it("renders blog detail and slug", () => {
    render(<BlogSlug />);
    expect(screen.getByText("Blog Detail")).toBeInTheDocument();
    expect(screen.getByText(/Slug:/i)).toBeInTheDocument();
  });
});
