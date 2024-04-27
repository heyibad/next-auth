import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

const privatePath= [
    "/login",
    "/signup",
    "/verify",
    "/profile"
  ]
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
const path= request.nextUrl.pathname    
const token= request.cookies.get('token')?.value || ""
if(privatePath.includes(path) && token.length>0){
    return NextResponse.redirect(new URL('/', request.url))
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: privatePath
}