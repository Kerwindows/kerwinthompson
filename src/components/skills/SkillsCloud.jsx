import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
const callbacks = {
  getWordColor: (word) => {
    if (word.value > 4) {
      return "orange";
    } else {
      return word.value > 3
        ? "white"
        : word.value > 2
        ? "grey"
        : word.value > 1
        ? "dodgereblue"
        : "red";
    }
  },
  getWordTooltip: (word) => `${word.text}`,
};
const words = [
  {
    text: "Bootstrap",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Leadership",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Accountability",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Communication",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Collaboration",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Adaptability",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Time management",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Problem-solving",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Creativity",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Critical thinking",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Attention to detail",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },

  {
    text: "Emotional intelligence",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Proficiency",

    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Knowledge",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Agile",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Experience",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Understanding",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Testing",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Debugging",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Best Practices",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Database Management",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "SQL",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Front-end",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Back-end",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Cloud Computing",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Deploying",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Managing",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Project Management",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Asana",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Timelines",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Resourceful",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "MySQL",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "JavaScript",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "REACT",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "PHP",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Node",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Express",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "MongoDB",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "PostgreSQL",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Git",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "GitHub",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "VSCode",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Linux",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Nginx",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Google Cloud",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Photoshop",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Figma",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "HTML",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "CSS",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "ReactJS",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "Redux",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
  {
    text: "REST API",
    value: Math.floor(Math.random() * (5 - 1 + 1) + 1),
  },
];
function SimpleWordcloud() {
  return (
    <ReactWordcloud options={options} words={words} callbacks={callbacks} />
  );
}
export default SimpleWordcloud;
