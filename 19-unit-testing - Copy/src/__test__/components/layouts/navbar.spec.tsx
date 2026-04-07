import { render, screen, fireEvent } from "@testing-library/react";
import * as nextAuth from 'next-auth/react';
import Navbar from "../../../components/layouts/navbar";
jest.mock('next/image', () => (props) => <img {...props} alt={props.alt || ''} />);
jest.mock('next/dist/client/script', () => (props) => <div data-testid="script">{props && props.children ? props.children : null}</div>);

describe("Navbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders user info and sign out", () => {
    jest.spyOn(nextAuth, 'useSession').mockReturnValue({ data: { user: { fullname: 'Test User', image: '/test.png', email: 'test@mail.com' } } });
    render(<Navbar />);
    expect(screen.getByText(/Welcome, Test User/)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
  });

  it("renders sign in button if not logged in", () => {
    jest.spyOn(nextAuth, 'useSession').mockReturnValue({ data: null });
    render(<Navbar />);
    expect(screen.getByText(/Sign In/)).toBeInTheDocument();
  });

  it("calls signOut when sign out button clicked", () => {
    jest.spyOn(nextAuth, 'useSession').mockReturnValue({ data: { user: { fullname: 'Test User', image: '/test.png', email: 'test@mail.com' } } });
    const signOutMock = jest.spyOn(nextAuth, 'signOut').mockImplementation(jest.fn());
    render(<Navbar />);
    fireEvent.click(screen.getByText(/Sign Out/));
    expect(signOutMock).toHaveBeenCalled();
  });

  it("calls signIn when sign in button clicked", () => {
    jest.spyOn(nextAuth, 'useSession').mockReturnValue({ data: null });
    const signInMock = jest.spyOn(nextAuth, 'signIn').mockImplementation(jest.fn());
    render(<Navbar />);
    fireEvent.click(screen.getByText(/Sign In/));
    expect(signInMock).toHaveBeenCalled();
  });

  it("renders script for title", () => {
    jest.spyOn(nextAuth, 'useSession').mockReturnValue({ data: { user: { fullname: 'Test User', image: '/test.png', email: 'test@mail.com' } } });
    render(<Navbar />);
    expect(screen.getByTestId("script")).toBeInTheDocument();
  });
});
