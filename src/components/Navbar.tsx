import Link from "next/link";
import Image from "next/image";
import { SquareMenu, LogIn } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <nav className="bg-gradient-to-l from-orange-500 to-orange-700 fixed w-full z-20 top-0 start-0">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-3">
        <Link
          href="/"
          className="md:flex hidden items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            priority
            src="/logo/tixio_logo.svg"
            alt="Logo"
            width={90}
            height={40}
          />
        </Link>
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          <button
            type="button"
            className="bg-red-800 hover:bg-pink-800 hover:cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center text-gray-100 md:flex hidden"
          >
            <Link href="/signin">Get started</Link>
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:cursor-pointer"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <SquareMenu strokeWidth="1.6px" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="z-100">
              <SheetHeader>
                <SheetTitle asChild>
                  <span className="font-semibold text-2xl text-black w-ful border-b-1 border-black pb-3">
                    Hey!
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-1 grid flex-1 auto-rows-min gap-4 px-4">
                <div className="grid gap-3">
                  <div className="flex flex-row w-full items-center gap-2">
                    <span className="flex items-center justify-center flex-[2] h-12 text-xs px-4 py-2 rounded-full border-2 border-black bg-transparent text-center text-gray-500 border-dotted">
                      Buy and sell event and shows tickets by logging in!
                    </span>
                    <button className="flex border-pink-600 px-4 py-2 rounded-full flex-1 min-w-fit bg-transparent border-1 text-xs hover:cursor-pointer justify-center items-center h-12">
                      <Link
                        href="/signin"
                        className="text-pink-600 items-center w-full flex gap-2 justify-center"
                      >
                        <LogIn />
                        Login
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <button
                    type="button"
                    className="w-full text-center bg-red-800 rounded-full px-4 py-2 text-gray-100 hover:cursor-pointer"
                  >
                    Close
                  </button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
