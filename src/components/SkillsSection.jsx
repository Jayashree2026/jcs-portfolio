import React from "react";
import mysqlImg from '../assets/mysql.png'
import canvaimg from '../assets/canva.svg'
import mantineImg from '../assets/mantineui.png'
import sqlImg from "../assets/sql.jpg"
import uipath from "../assets/UiPath.png"
import tcss from "../assets/tcss.png"
import matlab from "../assets/matlab.webp"


const skillCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", img: sqlImg }
    ],
  },

  {
    title: "Frontend Development & UI Tools",
    items: [
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", img: tcss },
      { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Mantine UI", img: mantineImg },
      { name: "PreBuilt UI", img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", img: canvaimg}
    ],
  },

  {
    title: "Backend Development & Databases",
    items: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", img: mysqlImg },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "UiPath Studio", img: uipath },
      { name: "Android Studio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Render", img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
      { name: "MATLAB", img: matlab},


    ],
  },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black text-white scroll-mt-10">
      <div className="container mx-auto max-w-10xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-16 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="group w-32 h-32 bg-gray-600 rounded-lg flex flex-col items-center justify-center 
             p-4 transition-all duration-300 
             hover:-translate-y-1 hover:shadow-[0_0_35px_10px_rgba(147,197,253,0.9)]"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
                
              ))}
          </div>
          </div>
        ))}
    </div>
    </section >
  );
};
