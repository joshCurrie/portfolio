import React from "react";

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
  if (skill <= 30) return "Little experience using " + skillName;
  if (skill < 60) return "I have experience using " + skillName;
  if (skill < 80)
    return "I have experience and am very comfortable using " + skillName;
  else return "I am an expert at " + skillName;
}

const SkillsBar = ({ level, name, observer }) => {

    // const [ref, setRef] = React.useState(null);

    // // Observe and unobserve this paragraph
    // React.useEffect(() => {
    //   if (ref) {
    //     observer.observe(ref);
    //   }
    //   return () => {
    //     if (ref) {
    //       observer.unobserve(ref);
    //     }
    //   };
    // }, [observer, ref]);



  var className = "bar-expand " + name.toLowerCase();



  return (
    <span
    // ref={setRef}
      style={{
        width: level,
        backgroundColor: getColorGradientBasedOnSkill(parseInt(level, 10)),
        textAlign: "center",
      }}
      className={className}
    >
      <span
        style={{
          width: level,
          fontWeight: 1000,
          color: "black",
        }}
      >
        {GetSkillLevelText(parseInt(level, 10), name)}
      </span>
    </span>
  );
};

export default SkillsBar;
