import Link from "next/link";
import { museo_font } from "@/app/fonts";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import { Menu, BookOpenText, LogIn } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <header
      className="w-full p-2 m-0 flex justify-between items-center sticky top-0 left-0 z-100
      bg-white/40 dark:bg-black/30 backdrop-blur-md shadow-md transition-colors"
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <h2 className="sr-only">Header</h2>
      <NavigationMenu className="lg:flex items-center hidden">
        <NavigationMenuList className="flex items-center">
          {/* Logo */}
          <NavigationMenuItem className="px-2 mx-1">
            <NavigationMenuLink asChild className="text-[20px]">
              <Link href="/" className={museo_font.className}>
                Sourcetribe&trade;
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Blogs */}
          <NavigationMenuItem>
            <ShinyButton className="rounded-[10px] p-3">
              <Link href="/blog" className="text-[15px]">
                Blog
              </Link>
            </ShinyButton>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="lg:flex items-center hidden">
        <NavigationMenuList className="flex items-center">
          {/* Theme Toggle  */}
          <ThemeToggle className="px-6 mx-1" />

          {/* Signup Page */}
          <NavigationMenuItem className="px-2 mx-1">
            <ShinyButton className="rounded-[10px] p-3">
              <Link href="/signin" className="text-[15px]">
                Signin
              </Link>
            </ShinyButton>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile hamburger menu */}
      <NavigationMenu className="lg:hidden max-w-full flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="px-6 mx-1" variant="default">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="z-100">
            <SheetHeader className="text-[18px]">
              <SheetTitle asChild>
                <Link href="/" className={museo_font.className}>
                  Sourcetribe&trade;
                </Link>
              </SheetTitle>
            </SheetHeader>

            {/* Main Content */}
            <div className="mt-7 grid flex-1 auto-rows-min gap-4 px-4">
              <div className="grid gap-3">
                <Button variant="outline">
                  <BookOpenText />
                  <Link href="/blog" className="text-[15px]">
                    Blog
                  </Link>
                </Button>
              </div>
              <div className="grid gap-3">
                <Button variant="outline">
                  <LogIn />
                  <Link href="/signin" className="text-[15px]">
                    Signin
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button variant="destructive">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Mobile Theme Toggle */}
        <ThemeToggle className="px-6 mx-1" />
      </NavigationMenu>
    </header>
  );
}

export default Navbar;
