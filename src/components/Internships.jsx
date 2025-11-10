import { ExternalLink, Github } from "lucide-react";
import infointern from "../assets/infointern.jpeg"
import bcg from "../assets/bcg.png"
import jp from "../assets/jp.png"

const internships = [
  {
    id: 1,
    title: "Infosys Springboard Internship",
    description:
      "Completed Infosys Springboard Internship as a Python Tech Stack developer where I built robust platform :Mass mailing APP",
    image:
      infointern,
    tags: ["Python", "Stremlit", "MySQL"],
    demoUrl: "https://drive.google.com/file/d/14yVY2HWYclcbwD6k8yh082NyDSssg460/view?usp=drive_link",
    githubUrl: "https://github.com/Jayashree2026/MassMailingApp-InfosysSpringboard",
  },
  {
    id: 2,
    title: "JPMorgan Chase & co-Software Eng Job simulation",
    description:
      "Simultaed through stock price interface using JPMorgan Chase frameworks to visualize real-time market data for traders, with added open-source contributions.",
    image:jp,
    tags: ["Forage"],
    demoUrl: "https://drive.google.com/file/d/1r0aAoIuHAVuBPzQw54H4WTWzGteell0u/view?usp=drive_link",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "BCG -GenAI Job Simulation",
    description:
      "Simulated data extraction and analysis to develop an AI-powered financial chatbot for intelligent user interactions.",
    image:bcg,
    tags: ["Forage"],
    demoUrl: "https://drive.google.com/file/d/14q-eKJFbUelj9i8ROgIZ6EEg1OU4mFdn/view?usp=drive_link",
    githubUrl: "#",
  },
];

export const InternshipShowcase=()=> {
  return (
    <section id="internship" className="py-20 bg-black text-white scroll-mt-20">
      <div className="container  mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          My <span className="text-blue-400">Internship Experience</span>
        </h1>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          Hands-on learning through real-world projects and collaborative experiences.
        </p>

        {/* Card section */}
        <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={intern.image}
                alt={intern.title}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h2 className="text-2xl font-semibold mb-2">{intern.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{intern.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {intern.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs border border-blue-400 text-blue-300 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={intern.demoUrl}
                    target="_blank"
                    className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={intern.githubUrl}
                    target="_blank"
                    className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
