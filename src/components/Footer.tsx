import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 px-4 border-t border-neutral-800 text-sm text-gray-300 bg-black">
      <h2 className="sr-only">Footer</h2>
      <div className="w-full max-w-4xl flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4 text-center">
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
          <Link href="/cookies" className="hover:underline">
            Cookie Policy
          </Link>
        </div>
        <span className="order-last sm:order-none">
          &copy; {new Date().getFullYear()} Tixio. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
