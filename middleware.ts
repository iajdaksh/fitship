import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔴 SKIP LOGIN PAGE
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const isAdminLoggedIn = request.cookies.get("admin-auth");

  // 🔐 PROTECT ADMIN ROUTES
  if (pathname.startsWith("/admin") && !isAdminLoggedIn) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
