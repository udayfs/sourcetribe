import { WavyBackground } from "@/components/ui/wavy-background";

function Signin() {
  return (
    <>
      <WavyBackground
        waveOpacity={0.2}
        className="max-w-4xl mx-auto h-full"
        colors={["#bffb24", "#f59e42", "#f472b6", "#a78bfa", "#38bdf8"]}
      ></WavyBackground>
    </>
  );
}

export default Signin;
