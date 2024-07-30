import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DrawerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="h-full w-full flex flex-col items-center justify-center gap-6 text-lg font-semibold">
          <li>
            <Link href="#home">
              <SheetClose className="hover:text-primary">Home</SheetClose>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <SheetClose className="hover:text-primary">About</SheetClose>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <SheetClose className="hover:text-primary">Projects</SheetClose>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <SheetClose className="hover:text-primary">Contact</SheetClose>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
