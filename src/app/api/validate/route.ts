import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
 const token = request.cookies.get('token')?.value || '';
 if (token.length > 0) {
   return NextResponse.json({ status: true });
 }
 else{
    return NextResponse.json({ status: false });
 }

}