import { ArrowDown } from "lucide-react";
import "./HeroSection.css"
import uranus from "../assets/uranus_image.png";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen md:min-h-[90vh] py-10 md:py-0 px-6 md:px-12"

    >
      {/* Left Content */}
      <div className="flex-1 max-w-2xl ml-15 text-left space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-blue-400 opacity-0 animate-fade-in-delay-1">
            {" "}
            Jayashree
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            {" "}
            C S
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
          Full-stack explorer in the CSE universe — building constellations of
          code and creativity.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
          ✨ Join me as I launch ideas into the digital stratosphere.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-5">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
        

      </div>


      {/* Right Placeholder for future visuals */}
      <div className="galaxy-wrapper">
        <img src={uranus} alt="Galaxy" className="galaxy-spin" />
      </div>

    </section>
  );
};
