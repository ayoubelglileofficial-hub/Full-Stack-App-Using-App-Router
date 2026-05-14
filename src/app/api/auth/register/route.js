import  dbConnect  from "@/utils/db";
import User from "@/models/User"; // Your Mongoose model
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
// import dbConnect from "../../../../utils/db";
// import User from "../../../../models/User";


export const POST = async (request) => {
    const { username, email, password } = await request.json();

    // Input validation
    if (!username || !email || !password) {
        return NextResponse.json(
            { error: "All fields are required" },
            { status: 400 }
        );
    }

    if (password.length < 6) {
        return NextResponse.json(
            { error: "Password must be at least 6 characters" },
            { status: 400 }
        );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
            { error: "Invalid email format" },
            { status: 400 }
        );
    }

    try {
        await dbConnect();

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }] 
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Return success (exclude password from response)
        const { password: _, ...userWithoutPassword } = newUser.toObject();
        
        return NextResponse.json(
            { 
                message: "User created successfully",
                user: userWithoutPassword 
            },
            { status: 201 }
        );

    } catch (err) {
        console.error("Registration error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
};