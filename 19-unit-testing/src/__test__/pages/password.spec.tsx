import { render, screen } from "@testing-library/react";
import PasswordPage from "@/pages/user/password";

describe("PasswordPage", () => {
  it("renders password page", () => {
    render(<PasswordPage />);
    expect(screen.getByText(/Password|Kata Sandi/i)).toBeInTheDocument();
  });
});
