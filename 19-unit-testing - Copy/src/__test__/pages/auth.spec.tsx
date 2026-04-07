import { render, screen } from "@testing-library/react";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";

describe("Login Page", () => {
  it("renders login page", () => {
    render(<Login />);
    expect(screen.getByText(/Login|Masuk/i)).toBeInTheDocument();
  });
});

describe("Register Page", () => {
  it("renders register page", () => {
    render(<Register />);
    expect(screen.getByText(/Register|Daftar/i)).toBeInTheDocument();
  });
});
