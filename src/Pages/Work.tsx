import { useState } from "react";
import { cn } from "../utils/cn";
import { text } from "stream/consumers";

interface ProjectListProps {
  label: string;
  title: string;
  description: string;
  tech?: string[];
}

const projectList = [
  {
    label: "TrendZone",
    name: "NFL TrendZone",
    description: `NFL TrendZone is an interactive analytics dashboard that visualizes NFL player and 
    team performance trends over time. Users can search for players, compare stats, 
    and explore matchup insights with clean, dynamic charts. The app transforms raw NFL roster and game
     data into meaningful metrics like rolling averages, usage rates, and efficiency scores, helping fans 
     and analysts spot breakout players and shifting team dynamics.Built with a focus on data transformation, 
     visualization, and performance optimization, NFL TrendZone demonstrates real-world engineering skills: 
     API integration, caching, and responsive chart rendering at scale.`,
    techStack: [
      "React",
      "Tailwind",
      "Recharts",
      "TanStack Query",
      "Node.js",
      "Redis",
    ],
  },
];

export default function Work() {
  const [active, setActive] = useState<string>(projectList[0].name);

  console.log(active);

  return (
    <main
      className="
        flex min-h-screen
        bg-[#fefef5]
      "
    >
      <div className="flex-1 flex">
        <div className="flex flex-col items-center justify-center space-y-6 px-8 py-12">
          {projectList.map((project) => {
            console.log(active === project.name);
            return (
              <button
                onClick={() => setActive(project.name)}
                className={cn(
                  "hover:text-orange-500 dark:text-zinc-300 dark:hover:text-orange-400 transition-colors font-medium",
                  active === project.name ? "text-orange-500" : "text-zinc-600"
                )}
              >
                {project.label}
              </button>
            );
          })}
        </div>

        {projectList.map((project) => {
          return (
            <div className="flex-1 flex flex-col justify-center px-12 py-16">
              <h1 className="text-4xl mb-2 font-bold leading-tight cursor-default">
                {project.name}
              </h1>

              <div className="flex flex-row justify-between  mb-2">
                {project.techStack.map((tech) => {
                  return (
                    <p className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300">
                      {tech},
                    </p>
                  );
                })}
              </div>

              <p className="text-md mb-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>

              <button
                className="
              bg-orange-500 text-white px-8 py-2 rounded-full text-lg font-semibold
              hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl
              transform hover:scale-105  duration-200 w-fit
              dark:bg-orange-500 dark:hover:bg-orange-400
            "
              >
                View Project
              </button>
            </div>
          );
        })}
      </div>

      {/* Right Section - Illustration */}
      <div className="flex-1 flex items-center justify-center p-8">
        <h1>Coming Soon...</h1>
      </div>
    </main>
  );
}
