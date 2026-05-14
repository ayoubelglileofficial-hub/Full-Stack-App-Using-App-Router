
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/layout/footer"
import AuthProvider from "@/components/authProvider/authProvider"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Full Stack App",
  description: "Full Stack App using App Router",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main 
            // className="flex-1 w-full max-w-350 mx-auto  md:px-6 py-6"
            >
              {children}
            </main>
            <Footer/>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}