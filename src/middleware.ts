import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect root to /en/about-me
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/about-me', request.url));
  }

  // Redirect locale roots to about-me
  if (pathname === '/en' || pathname === '/es') {
    return NextResponse.redirect(new URL(`${pathname}/about-me`, request.url));
  }

  // Handle paths without locale prefix (e.g., /resumen -> /en/resumen)
  // Check if pathname does NOT start with /en or /es
  if (!pathname.startsWith('/en/') && !pathname.startsWith('/es/')) {
    // Redirect to default locale (English)
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|images|_next/static|_next/image|favicon|robots|sitemap|.*\\..*).*)'
};
