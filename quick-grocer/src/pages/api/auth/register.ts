export const runtime = "nodejs";

import User from "@/app/models/user.model";
import connectDb from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:NextRequest){
  try{
    await connectDb()
    const {name,email,password}=await req.json()
    const existingUser=await User.findOne({email})
    if(existingUser){
      return NextResponse.json({message:"User already exists"},{status:400})
    }
    if(password.length<6){
      return NextResponse.json({message:"Password must be at least 6 characters long"},{status:400})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user = await User.create({
      name,email,password:hashedPassword
    })
    return NextResponse.json(user,{status:200})
  }
  catch(error){
    console.log("Error creating user:", error);
    return NextResponse.json({message:`Error creating user ${error}`},{status:500})
  }
}