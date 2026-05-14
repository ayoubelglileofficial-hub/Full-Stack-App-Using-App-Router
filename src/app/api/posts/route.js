import { NextResponse } from "next/server"
import dbConnect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (req) => {
    try {
        console.log("1. Connecting to DB...")
        await dbConnect()
        console.log("2. Connected successfully!")

        console.log("3. Fetching posts...")
        const posts = await Post.find()
        console.log("4. Posts fetched:", posts)

        return NextResponse.json(posts, { status: 200 })
    } catch(err) {
        console.log("ERROR:", err.message)
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}



//  test the connect


// import { NextResponse } from "next/server"
// import mongoose from "mongoose"

// export const GET = async (request) => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI)
//     return new NextResponse("MongoDB connected!", { status: 200 })
//   } catch (error) {
//     return new NextResponse("MongoDB connection FAILED: " + error.message, { status: 500 })
//   }
// }