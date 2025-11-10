import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import magicai from "../assets/magicai.png"
import massmail from "../assets/massmail.png"
import homelook from "../assets/homelook.png"
import signbridge from "../assets/signbridge.png"
import fbird from "../assets/fbird.jpg"

const projects = [
  {
    id: 1,
    title: "Magic AI : SaaS Platform",
    description: "A full stack project featuring robust authentication, premium user plans, and multiple AI-powered tools — all wrapped in a modern, responsive UI.",
    image: magicai,
    tags: ["PostgreSQL" ,"React.js","Node.js","Express.js", "TailwindCSS","Clerk","PreBuilt UI"],
    demoUrl: "https://magicai-frontend.vercel.app/",
    githubUrl: "https://github.com/Jayashree2026/magicai",
  },
  {
    id: 2,
    title: "Homelook.com E-comm website",
    description:
      " Full-Featured MERN eCommerce platform for home décor with secure payments and an admin dashboard for seamless store management.",
    image: homelook,
    tags: ["MongoDB","React.js","Node.js","Express.js","Stripe","Razorpay"],
    demoUrl: "https://homelook-client.vercel.app/",
    githubUrl: "https://github.com/Jayashree2026/homelook.com-MERN-Ecommerce-Application",
  },
  {
    id: 3,
    title: "Mass Mailing App",
    description:
      "A platform that streamlines bulk email campaigns through seamless Gmail and Outlook integration for effortless large-scale outreach.",
    image: massmail,
    tags: ["Python","Streamlit","MongoDB"],
    demoUrl: "https://massmailapp-deployed-version-ldy2gdmqqnk3jdqkhycc6b.streamlit.app/",
    githubUrl: "https://github.com/Jayashree2026/Massmailapp-deployed-version",
  },
  {
    id: 4,
    title: "SignBridge",
    description:
      " A Web Extension for Real-Time Translation of Sign Language in Video Conferencing with Communication Records using Computer Vision(MediaPipe and OpenCV).",
    image: signbridge,
    tags: ["Chrome Web","Python","Javascript","FastAPI","Mediapipe"],
    demoUrl: "#",
    githubUrl: "https://github.com/Jayashree2026/SignBridge-",
  },
  {
    id: 5,
    title: "Flappy Bird Game",
    description:
      "A dynamic Flappy Bird–style game developed in Godot Engine featuring smooth physics, collision detection, and responsive controls.",
    image:fbird,
    tags: ["GDScript","Godot Engine"],
    demoUrl: "#",
    githubUrl: "https://github.com/Jayashree2026/FlappyBird-Game---Godot-engine",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = projects.length;

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide; // cleanup
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 3500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Update slider transform
  useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth / 3; // since showing 3 at a time
      sliderRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
    }
  }, [currentIndex]);

  return (
    <section id="projects" className="py-24 px-4  text-white relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-yellow-300">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        {/* Slider wrapper */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(projects.length / 3) * 100}%`,
            }}
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className="w-1/3 flex-shrink-0 p-3"
              >
                <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right buttons */}
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
            }
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-saturn-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <span ><ArrowRight size={16} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};
