import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connectDB()

export async function POST(request:NextRequest){

try {
const {token}= await request.json()
if(!token){
    return NextResponse.json({message:" Token Not Found",status:false},{status:400})
}

const user= await User.findOne({verificationToken:token,verificationTokenExpiry:{$gt:Date.now()}}
)
if(!user){
    return NextResponse.json({message:"Invalid Token",status:false},{status:400})
}
 
user.isVerified=true
user.verificationToken=undefined
user.verificationTokenExpiry=undefined
await user.save()

return NextResponse.json({message:"User Verified successfully",status:true},{status:201})
    
} catch (error: any) {
    return NextResponse.json({message:error.message,status:false},{status:500})
}

}