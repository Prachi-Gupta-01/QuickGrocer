import connectDb from "@/app/lib/db";
import User from "@/app/models/user.model";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
  try {
    await connectDb()
    const {role,mobile} = await req.json()
    const session = await auth()
    const user=await User.findOneAndUpdate({email:session?.user?.email},{role,mobile})
    if(!user){
      return NextResponse.json(
        {message: "User not found"},{status: 404}
      )
    }
    return NextResponse.json(
      {message: "User role and mobile updated successfully"},{status: 200}
    )
  } catch (error) {
    console.log("Error updating user role and mobile:", error);
    return NextResponse.json({
      message: "Failed to update user role and mobile"},{status: 500
    })
  }
}