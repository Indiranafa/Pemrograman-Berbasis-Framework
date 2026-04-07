import { render } from "@testing-library/react";
import Navbar from "@/components/layouts/navbar";
describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });
});
