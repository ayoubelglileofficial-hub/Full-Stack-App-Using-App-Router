// app/api/user/[id]/route.js
import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"
import User from "@/models/User"

export const GET = async (req, context) => {
    try {
        await dbConnect()
        const { id } = await context.params  // await params if needed
        const user = await User.findById(id).select("-password")
        
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }
        
        return NextResponse.json(user, { status: 200 })
    } catch(err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}