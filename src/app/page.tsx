import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { onest_font } from "./fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

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
            <h1
              className={
                "font-title text-[32px] sm:text-[48px] md:text-[56px] xl:text-[64px] font-medium leading-tight sm:leading-none bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent " +
                onest_font.className
              }
            >
              Your Code, Centralized. Collaborated. Conquered.
            </h1>
            <div
              className={
                "flex w-full max-w-sm items-center gap-2 " +
                onest_font.className
              }
            >
              <Input
                type="email"
                placeholder="Email"
                className="focus:ring-[3px] focus:ring-zinc-400 backdrop-blur-[4px] rounded-3xl"
              />
              <Button type="submit" variant="default" className="rounded-3xl">
                Get Started
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
