// components/Footer.tsx
import Image from "next/image"
import Link from "next/link"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

const navLinks = [
    { label: "Home", href: "/" },
    // { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
]

const socialLinks = [
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebook, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaGithub, href: "#" },
]

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-1 md:px-10">
                <div className="grid items-center justify-between gap-8 md:grid-cols-3 ">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 ml-8">
                        {/* <Image src="/favicon.png" alt="Company Logo" width={120} height={40} priority className="h-20 w-auto" /> */}
                        <p className="text-[12px]">© 2026 Next Project. All rights reserved.</p>
                    </Link>

                    {/* <nav className="flex flex-wrap gap-x-7 gap-y-3 md:justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium transition hover:text-slate-950 dark:hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav> */}

                    <div className="flex gap-6 text-sm">
                        <Link href="/terms" className="underline underline-offset-4">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacy" className="underline underline-offset-4">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="flex gap-4 md:justify-end">
                        {socialLinks.map(({ icon: Icon, href }, index) => (
                            <Link
                                key={index}
                                href={href}
                                aria-label="Social link"
                                className="transition hover:text-slate-950 dark:hover:text-white"
                            >
                                <Icon className="h-10 w-h-10" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Next Project. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link href="/terms" className="underline underline-offset-4">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacy" className="underline underline-offset-4">
                            Privacy Policy
                        </Link>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}