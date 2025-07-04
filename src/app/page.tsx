import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { onest_font } from "./fonts";
import Footer from "@/components/Footer";
import Link from "next/link";

function Home() {
  return (
    <>
      <main className="relative h-[1000px] w-full overflow-hidden">
        <h2 className="sr-only">Main Content</h2>
        <FlickeringGrid
          className="absolute inset-0 z-[-1] size-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={4}
          color="#BAC4C8"
          maxOpacity={0.4}
          flickerChance={0.3}
        />

        {/* Main Page */}
        <div className="flex w-full items-center justify-center min-h-[50vh] px-2 sm:px-0">
          <section className="w-full max-w-3xl mx-auto text-center py-10 sm:py-16 px-2 sm:px-4 rounded-2xl bg-transparent flex flex-col items-center gap-5">
            <Link
              href="/blog"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-10 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-zinc-700 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-600"
              role="alert"
            >
              <span className="text-xs text-white dark:bg-zinc-900 bg-black rounded-full px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium">
                Sourcetribe is out! See what&apos;s new
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1
              className={
                "font-title text-[32px] sm:text-[48px] md:text-[56px] xl:text-[64px] font-bold leading-tight sm:leading-none bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent " +
                onest_font.className
              }
            >
              Your Code, Centralized. Collaborated. Conquered.
            </h1>
            <p
              className={
                "mt-7 mb-4 font-semibold sm:text-[20px] sm:leading-tight leading-6 md:text-[23px] xl:text-[26px] bg-gradient-to-r from-zinc-400 to-stone-600 bg-clip-text text-transparent " +
                onest_font.className
              }
            >
              <b>Sourcetribe&trade;</b> is your all-in-one platform for seamless
              code hosting, version control, and collaborative development. Say
              goodbye to scattered files and hello to a single, secure home for
              all your projects.
            </p>
            {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </a>
            </div> */}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
