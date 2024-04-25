import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB()

export async function POST(request:NextRequest){

try {

const response= NextResponse.json({message:"User Logout successfully",status:true},{status:201})

response.cookies.set("token","",{
    httpOnly:true,
expires: new Date(0)
})

return response
    
} catch (error: any) {
    return NextResponse.json({message:error.message,status:false},{status:500})
}

}