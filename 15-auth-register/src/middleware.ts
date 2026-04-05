import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Cek cookie session NextAuth
    const token = request.cookies.get("next-auth.session-token");
    if (token) {
        // Jika token ada, lanjutkan ke halaman yang diminta
        return NextResponse.next();
    } else {
        // Jika token tidak ada, redirect ke halaman utama
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/produk", "/about", "/profile"],
};
