import { render, screen } from "@testing-library/react";
import EditProfile from "@/pages/profile/edit";

describe("EditProfile", () => {
  it("renders edit profile page", () => {
    render(<EditProfile />);
    expect(screen.getByText(/Edit Profile Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Ini halaman edit profile/i)).toBeInTheDocument();
  });
});
