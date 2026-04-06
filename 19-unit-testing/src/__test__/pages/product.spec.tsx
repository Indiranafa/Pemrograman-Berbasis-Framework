import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/pages/produk"
import HeroSection from "@/views/product/HeroSection"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

// Mock next/image agar tidak error pada test
jest.mock("next/image", () => {
  return {
    __esModule: true,
    default: ({ src, alt, ...props }: { src?: string; alt?: string; [key: string]: any }) => {
  return <img src={src} alt={alt} {...props} />
}
  }
});

// Ganti image mock data agar pakai slash di depan
jest.mock("swr", () => () => ({
  data: { data: [
    { id: "1", name: "Produk A", price: 10000, image: "/image-a.jpg", category: "Kategori A" },
    { id: "2", name: "Produk B", price: 20000, image: "/image-b.jpg", category: "Kategori B" }
  ] },
  error: null,
  isLoading: false,
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<TampilanProduk />)
    expect(screen.getByText("Daftar Produk")).toBeInTheDocument()
    expect(screen.getByText("Produk A")).toBeInTheDocument()
    expect(screen.getByText("Produk B")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("renders empty state when no products", () => {
    jest.mock("swr", () => () => ({
      data: { data: [] },
      error: null,
      isLoading: false,
    }))
    const page = render(<TampilanProduk />)
    expect(screen.getByText("Daftar Produk")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })
})

describe("HeroSection Component", () => {
  it("renders hero section title and subtitle", () => {
    render(<HeroSection />)
    expect(screen.getByTestId("hero-title").textContent).toBe("Produk User Page")
    expect(screen.getByText("Temukan produk terbaik di sini!")).toBeInTheDocument()
  })

  it("matches snapshot", () => {
    const { container } = render(<HeroSection />)
    expect(container).toMatchSnapshot()
  })
})