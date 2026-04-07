import { render, screen } from "@testing-library/react";
import AppSetting from "@/pages/setting/app";

describe("AppSetting", () => {
  it("renders app setting page", () => {
    render(<AppSetting />);
    expect(screen.getByText("App Setting Page")).toBeInTheDocument();
  });
});
