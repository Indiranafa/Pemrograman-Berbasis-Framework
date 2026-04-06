import { render, screen } from "@testing-library/react";
jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: { user: { fullname: "Test User" } } }),
}));
import HalamanProfile from "@/pages/profile";

describe("HalamanProfile", () => {
  it("renders profile page and welcome", () => {
    render(<HalamanProfile />);
    expect(screen.getByText("Halaman Profile")).toBeInTheDocument();
    expect(screen.getByText(/Selamat Datang/)).toBeInTheDocument();
    expect(screen.getByText(/Test User/)).toBeInTheDocument();
  });
});
