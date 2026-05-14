This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


https://www.youtube.com/watch?v=VE8BkImUciY&list=PLj-4DlPRT48mYFZcTiaC4GEHbi98Y5z0a&index=1



2:24:11



## ----------------------------- database Part --------------------------------
-   startwhite the connect , the code hier C:\Users\12500031\Desktop\Next Js Project\Full Stack App Using App Router\src\utils\db.js
-   after that Build awer schema (in folder "src/models/namechema.js)
-   build the fil where we hand the CRUD syntaxe in (app/api/namethepartlikePOST/route.js) // route.js did'nt change like page.js , and to test it use that script in the fct     
        return new NextResponse("IT works", {status:200})
        and that url to see it http://localhost:3000/api/posts












Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## ----------------------------- Auth Part --------------------------------
https://youtu.be/VE8BkImUciY?t=8085&si=wTYAX7rLxAD-WwHX
install :       npm install next-auth@beta
1       NextAuth configuration file or Auth API route handler.
2       SessionProvider setup for NextAuth
3       useSession part oin the dashbord page (the page behing auth folders)
        remarq : mayby same time we neat to use NEXTAUTH_URL in .env
4       build the login and register pages in eatch folder in Dashbord/(auth) folder
        the register part (the POST req) link white api/auth/register/route.js like NextAuth


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 📦 Project Packages & Setup

### 1. Core Dependencies

| Command | Purpose |
|---|---|
| `npm install clsx tailwind-merge class-variance-authority` | Utility packages for clean Tailwind class handling and reusable UI variants |
| `npm install lucide-react` | Icon library |
| `npm install framer-motion` | Animations and transitions |
| `npm install react-hook-form zod @hookform/resolvers` | Forms and validation |
| `npm install next-themes sonner` | Theme switching and toast notifications |
| `npm install swr date-fns` | Data fetching/cache and date formatting |
| `npm install mongoose bcrypt` | MongoDB connection/models and password hashing |
| `npm install recharts` | Charts for dashboards/statistics |

Full command:

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react framer-motion react-hook-form zod @hookform/resolvers next-themes sonner swr date-fns mongoose bcrypt recharts












Start white header.tsx