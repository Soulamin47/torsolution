import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Inject the current pathname into a request header so that server
// components (the root layout in particular) can detect the locale
// without relying on client-side state. Required for correct
// <html lang="..."> SSR.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Run on all routes except static assets, images and the API.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/|.*\\..*).*)"],
};
