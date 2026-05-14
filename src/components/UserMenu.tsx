"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut, LogIn, UserPlus, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="bg-primary/10 p-2 rounded-full animate-pulse w-10 h-10" />
    );
  }

  const isLoggedIn = !!session;
  const userName = session?.user?.name || session?.user?.email || "User";
  const userImage = session?.user?.image;
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center bg-transparent gap-2 text-sm transition-colors"
        >
          <div className="bg-primary/10 p-2 rounded-full">
            {isLoggedIn ? (
              <Avatar className="w-6 h-6">
                <AvatarImage src={userImage || "https://github.com/shadcn-ui/ui/blob/main/apps/v4/public/avatars/02.png?raw=true"} alt={userName} className="grayscale w-full h-auto" />
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  {userInitial}
                </AvatarFallback>
              </Avatar>
            ) : (
              <User className="text-primary w-4 h-4" />
            )}
          </div>
          <span className="font-medium hidden sm:inline">
            {isLoggedIn ? userName : "Account"}
          </span>
          <ChevronDown className="w-3 h-3 hidden sm:inline" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/profil")}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4 text-primary" />
              <span>Profile</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="cursor-pointer text-red-600 focus:text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              onClick={() => router.push("/dashboard/login")}
              className="cursor-pointer"
            >
              <LogIn className="mr-2 h-4 w-4 text-primary" />
              <span>Login</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => router.push("/dashboard/register")}
              className="cursor-pointer"
            >
              <UserPlus className="mr-2 h-4 w-4 text-primary" />
              <span>Register</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}