import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import HalamanAdmin from "@/pages/admin";

describe("HalamanAdmin", () => {
  it("renders admin page title and description", () => {
    render(<HalamanAdmin />);
    expect(screen.getByText("Halaman Admin")).toBeInTheDocument();
    expect(screen.getByText(/Selamat datang di halaman admin/i)).toBeInTheDocument();
  });
});
