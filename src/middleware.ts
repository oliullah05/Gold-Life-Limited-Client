/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Define private and auth routes
const privateRoutes: RegExp[] = [
  /^\/dashboard(\/.+)?$/,
]
const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
]


// Helper function to check if the route is private
const isPrivateRoute = (pathname: string) =>
  privateRoutes.some(route => route.test(pathname))
// Helper function to decode user from accessToken
const decodeToken = (accessToken: string | undefined) => {
  if (!accessToken) return null
  try {
    return jwtDecode(accessToken) as any
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return null // Return null if token decoding fails
  }
}

// Main middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies()?.get('accessToken')?.value

  // If user is not logged in and the route is private, redirect to login
  if (!accessToken && isPrivateRoute(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If logged in but accessing an auth route, redirect to home
  if (accessToken && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // If logged in and accessing a private route
  if (accessToken && isPrivateRoute(pathname)) {

    const user = decodeToken(accessToken)
    const role = user?.role;
    console.log({user});
    // Handle dashboard access based on user role
    if (role && pathname.includes('/dashboard')) {

      const isHisDashboard = pathname === `/dashboard/${role}` || pathname === `/dashboard/${role}/`

      if (isHisDashboard) {
        return NextResponse.next()
      } else if (/^\/dashboard\/[^\/]+/.test(pathname)) {
        // Redirect to home if accessing another user's dashboard
        return NextResponse.redirect(new URL('/', request.url))
      } else {
        // Common dashboard route rewrite
        return NextResponse.rewrite(new URL(`/dashboard/${role}`, request.url))
      }
    }

    // If no special dashboard handling, proceed as normal
    return NextResponse.next()
  }

  // If public route, proceed as normal
  return NextResponse.next()
}

// Update matcher for specific path-based matching
export const config = {
  matcher: [
    '/login',
    "/dashboard",
    '/dashboard/:path*',
    '/register',
    '/forgot-password',
    '/reset-password',
  ],
}
