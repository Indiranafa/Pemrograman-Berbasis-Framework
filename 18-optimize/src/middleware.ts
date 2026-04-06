import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    // Daftar route yang perlu proteksi
    const protectedRoutes = ["/produk", "/about", "/profile", "/admin"];

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
        if (!token) {
            // Tidak ada token, redirect ke halaman utama
            return NextResponse.redirect(new URL("/", request.url));
        }
        // Jika akses /admin, cek role
        if (pathname.startsWith("/admin") && token.role !== "admin") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/produk", "/about", "/profile", "/admin"],
};