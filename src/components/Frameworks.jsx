import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "html",
    "laravel",
    "css",
    "mysql",
    "php",
    "js",
    "react",
    "bootstrap",
    "tailwind",
  ];

  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} radius={130}>
        {skills.map((skill) => (
          <img
            key={skill}
            src={`assets/images/logos/${skill}.svg`}
            alt={skill}
            className="object-contain w-full h-full duration-200 rounded-md hover:scale-110"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={85} reverse speed={1.5}>
        {skills.reverse().map((skill) => (
          <img
            key={skill}
            src={`/assets/images/logos/${skill}.svg`}
            alt={skill}
            className="object-contain w-full h-full duration-200 rounded-sm hover:scale-110"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
