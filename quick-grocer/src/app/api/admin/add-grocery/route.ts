import uploadOnCloudinary from "@/app/lib/cloudinary";
import connectDb from "@/app/lib/db";
import Grocery from "@/app/models/grocery.model";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
  try {
    await connectDb()
    const session = await auth()
    if(session?.user?.role !== "admin"){
      return NextResponse.json(
        {message: "Unauthorized Access"},{status: 403}
      )
    }
    const formData=await req.formData()
    const name = formData.get("name") as string
    const price = formData.get("price") as string
    const unit = formData.get("unit") as string
    const category = formData.get("category") as string
    const file = formData.get("image") as Blob|null
    let imageUrl 
    if(file){
      imageUrl=await uploadOnCloudinary(file)
    }
    const grocery=await Grocery.create({
      name,price,category,unit,image:imageUrl
    })
    return NextResponse.json(
      grocery,{status:200}
    )
  } catch (error) {
   console.log("Error creating grocery item:", error);
    return NextResponse.json(
      {message: "Failed to create grocery item"},{status: 500}
    )
  }
}