import { NextResponse } from 'next/server';


export function middleware(request) {
  // Replace with actual login logic (e.g., checking cookies)
  const login = false; 

  if (login) {
    return NextResponse.next(); 
  } else {
    return NextResponse.redirect(new URL('/', request.url)); 
  }
}

// Configure middleware to match specific routes
export const config = {
  matcher: ['/user/:path*'], 
};
