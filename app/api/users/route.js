import connectToDatabase from "@/lib/dbConnect";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { userName, balance, incremet, saturdayAllowance } = await req.json();
    await connectToDatabase();
    const newUser = new User({ name:userName, balance, incremet, saturdayAllowance });
    await newUser.save();
    return NextResponse.json({message:"User added successfully", user:newUser},{status:201}); 
}

export async function GET() {
    await connectToDatabase();
    const users = await User.find();
    return NextResponse.json({users});    
}

export async function PATCH(req) {
    const { id, expense } = await req.json();
    await connectToDatabase();

    // Find the user by id and deduct the expense from their balance
    const user = await User.findById(id);
    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    user.balance -= expense;
    await user.save();

    return NextResponse.json({ message: "Expense deducted", user }, { status: 200 });
}


export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectToDatabase();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message:"User deleted successfully"},{status:200});
    
}