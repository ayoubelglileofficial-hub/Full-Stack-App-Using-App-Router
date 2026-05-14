import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"  // ✅ v5: Credentials (not CredentialsProvider)
// import dbConnect from "../../../utils/db"  // ✅ Relative path
// import User from "../../../models/User"     // ✅ You forgot to import User model!
import  dbConnect  from "@/utils/db";
import  User  from "@/models/User";


import bcrypt from "bcryptjs"


export const { handlers, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await dbConnect()
                
                try {
                    const user = await User.findOne({ email: credentials.email })

                    if (!user) {
                        return null
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    )

                    if (!isPasswordCorrect) {
                        return null
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                    }

                } catch (err) {
                    console.error("Auth error:", err)
                    return null
                }
            }
        })
    ],
    
    session: {
        strategy: "jwt"
    },
    
    secret: process.env.NEXTAUTH_SECRET,
})

export const { GET, POST } = handlers