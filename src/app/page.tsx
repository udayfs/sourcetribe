import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <main className="relative h-[1000px] w-full overflow-hidden">
        <FlickeringGrid
          className="absolute inset-0 z-[-1] size-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={4}
          color="#00FFFF"
          maxOpacity={0.4}
          flickerChance={0.3}
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
