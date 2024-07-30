import Link from "next/link";
import prisma from "@/lib/db";
import {
  getTwoInitialsToUpperCase,
  getTwoNamesCapitalized,
  getNameToLowerCase,
} from "@/app/_utils/format-text";
import { LockOpen1Icon, GearIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export async function Profile() {
  const user = await prisma.user.findUnique({
    where: {
      id: process.env.USER_ID,
    },
  });

  const userName = user?.name as string;
  const userEmail = user?.email as string;
  const userPicture = user?.picture as string;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-8 flex items-center justify-between gap-x-2 px-0"
        >
          <Avatar className="h-7 w-7">
            <AvatarImage src={userPicture} alt={userName} />
            <AvatarFallback>
              {getTwoInitialsToUpperCase(userName)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {getTwoNamesCapitalized(userName)}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {getNameToLowerCase(userEmail)}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/authenticate">
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <GearIcon className="w-4 h-4" />
            Configurações
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="gap-2 cursor-pointer">
          <LockClosedIcon className="w-4 h-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
