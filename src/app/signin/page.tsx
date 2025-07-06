"use client";

import { useTheme } from "next-themes";
import { WavyBackground } from "@/components/ui/wavy-background";
import { onest_font } from "../fonts";
import SigninForm from "@/components/SigninForm";

function SigninPage() {
  const { theme } = useTheme();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SigninForm className={onest_font.className} />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <WavyBackground
          colors={["#ffbf24", "#ff9e42", "#f472b6", "#a78bfa", "#38bdf8"]}
          waveOpacity={0.7}
          waveWidth={40}
          backgroundFill={theme === "light" ? "white" : "black"}
        />
      </div>
    </div>
  );
}

export default SigninPage;
