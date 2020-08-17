import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function getColorGradientBasedOnSkill(skill) {
  if (skill < 10) return "#FF0000";
  else if (skill < 20) return "#FF4400";
  else if (skill < 30) return "#ff5500";
  else if (skill < 40) return "#FF8800";
  else if (skill < 50) return "#FFCC00";
  else if (skill < 60) return "#FFFF00";
  else if (skill < 70) return "#BBFF00";
  else if (skill < 80) return "#77FF00";
  else if (skill < 90) return "#33FF00";
  else return "#00FF00";
}

function GetSkillLevelText(skill, skillName) {
  if (skill === 0) return "";
  if (skill <= 30) return "Little experience using " + skillName;
  if (skill < 60) return "I have experience using " + skillName;
  if (skill < 80)
    return "I have experience and am very comfortable using " + skillName;
  else return "I am an expert at " + skillName;
}

const SkillsBar = ({ level, name }) => {
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0 });

  const [progressBarPercent, setProgressBarPercent] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgressBarPercent(level);
    } else {
      setProgressBarPercent(0);
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
    },
    hidden: {
      y: entry,
      opacity: 0,
    },
  };

  var className = "bar-expand " + name.toLowerCase();
  return (
    <span
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={{ variants }}
      style={{
        width: progressBarPercent,
        backgroundColor: getColorGradientBasedOnSkill(
          parseInt(progressBarPercent, 10)
        ),
        textAlign: "center",
        marginTop: "0.5px",
      }}
      className={className}
    >
      <span
        style={{
          width: progressBarPercent,
          fontWeight: 1000,
          color: "black",
        }}
      >
        {GetSkillLevelText(parseInt(progressBarPercent, 10), name)}
      </span>
    </span>

    // <AnimatedBar width={400} percent={level} />
  );
};

export default SkillsBar;
