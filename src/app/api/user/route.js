import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"      // Fix #1: correct import name
import User from "@/models/User"         // Fix #2: correct model

export const GET = async (req) => {
    try {
        await dbConnect()
        
        const users = await User.find().select("-password")  // Fix #3: hide passwords, Fix #4: correct variable name
        
        return NextResponse.json(users, { status: 200 })
    } catch(err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}