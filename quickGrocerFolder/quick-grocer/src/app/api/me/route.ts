import User  from '@/app/models/user.model';
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export  async function  GET(req:NextRequest){
  try {
    const session=await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        {message: "Not authenticated"},{status: 401}
      )
    }
    const user =await User.findOne({email:session.user.email}).select("-password");
    if(!user){
      return NextResponse.json(
        {message: "User not found"},{status: 400}
      )
    }
      return NextResponse.json(
        user,{status: 200}
      )
  } catch (error) {
    return NextResponse.json(
      {message: "Failed to fetch user data"},{status: 500}
    )
  }
}