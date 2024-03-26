'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';



const AccountDropdown = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant={"link"}><Avatar className={"mr-2"}>
        <AvatarImage src={session?.data?.user?.image ?? ""}  />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>{session?.data?.user?.name}</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        {isLoggedIn ? (<DropdownMenuItem onClick={() => signOut()}><LogOutIcon className='mr-2' /> Sign Out</DropdownMenuItem>) : (<DropdownMenuItem onClick={() => signIn("google")}><LogInIcon className='mr-2' /> Sign In</DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

const Header = () => {
  const session = useSession();
  return (
    <header className='bg-gray-100 py-2 dark:bg-gray-900 '>
      <div className='flex justify-between items-center container mx-auto'>
        <div><Link href={"/"} className='text-xl'>Developer Finder</Link></div>
        <div className='flex items-center gap-4'>
          <AccountDropdown />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
