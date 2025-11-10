import { Briefcase, Code, User,Lightbulb, } from "lucide-react";
import saturn from "../assets/saturn_image.png";
import "./HeroSection.css"

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
      {" "}
      <div className="container mx-auto max-w-11xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-yellow-300"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center justify-around">
          <div className="saturn-wrapper ">
            <img src={saturn} alt="Galaxy" className="saturn-spin" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer & UI/UX Tinkerer
            </h3>

            <p className="text-muted-foreground">
              Orbiting the webverse and beyond — I craft clean, scalable web apps that feel great to use and look even better. From full-stack e-commerce to AI-powered SaaS, every project is an opportunity to turn ideas into polished, interactive experiences.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-saturn-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1a2rGNkwA7ykkuTcTtGyk7G1POXuNpbmo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"

                className="relative ml-3 mt -5 px-6 py-2 border border-white text-white overflow-hidden group rounded-md transition-all duration-300"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 bg-black p-6">
            {/* 1️⃣ Full Stack Development */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white text-black">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-black/10">
                  <Code className="h-6 w-6 text-black" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p>
                    Building end-to-end scalable web applications using modern technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* 2️⃣ Entrepreneurship & Innovation — BLUE BACKGROUND */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-blue-400/40 hover:shadow-lg transition-all duration-300 bg-yellow-300 text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/10">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <div className="text-left text-black">
                  <h4 className="font-semibold text-lg">Entrepreneurship & Innovation</h4>
                  <p>
                    Exploring creative solutions and developing impactful ideas through technology-driven innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* 3️⃣ Leadership & Project Management */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white text-black">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-black/10">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & Project Management</h4>
                  <p>
                    Guiding teams and managing projects efficiently from concept to completion with clear vision and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
