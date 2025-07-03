import Link from "next/link";
import { museo_font } from "@/app/fonts";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 px-4 border-t border-gray-300 dark:border-neutral-800 text-sm text-gray-600 dark:text-gray-400">
      <h2 className="sr-only">Footer</h2>
      <div className="w-full max-w-4xl flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4 text-center">
        <span className={"order-last sm:order-none " + museo_font.className}>
          &copy; {new Date().getFullYear()} Sourcetribe&trade;
        </span>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/signup" className="hover:underline">
            Signup
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
