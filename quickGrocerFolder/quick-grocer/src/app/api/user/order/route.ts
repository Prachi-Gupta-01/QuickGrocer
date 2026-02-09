import connectDb from "@/app/lib/db";
import Order from "@/app/models/order.model";
import User from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const {userId,items,paymentMethod,totalAmount,address}=await req.json();
    if(!items || !userId || !paymentMethod ||!totalAmount || !address){
      return NextResponse.json(
        {message: "All fields are required,send all credentials"},{status: 400}
      )
    }
    const user = await User.findById(userId);
    if(!user){
      return NextResponse.json(
        {message: "User not found"},{status: 400}
      )
    }

   const newOrder = await Order.create({
    user:user._id,
    items,
    paymentMethod,
    totalAmount,
    address
   })
    return NextResponse.json(
      {message: "Order placed successfully",order:newOrder},{status: 201}
    )

  } catch (error) {
    return NextResponse.json(
      {
      message: "Failed to place order"
    }
    ,{status: 500})
  }
}