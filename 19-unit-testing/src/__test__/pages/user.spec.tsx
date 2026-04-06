import { render, screen } from "@testing-library/react";
import UserSettingPage from "@/pages/user";

describe("UserSettingPage", () => {
  it("renders user setting page", () => {
    render(<UserSettingPage />);
    expect(screen.getByText("User Setting Page")).toBeInTheDocument();
  });
});
