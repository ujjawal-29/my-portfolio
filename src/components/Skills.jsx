
// import { useEffect, useState } from "react";
// import "./Skills.css";

// export default function Skills() {
//   const skills = ["HTML","CSS","JavaScript","React","Bootstrap","Node.js","MongoDB"];
//   const [visible, setVisible] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + window.innerHeight;
//       const newVisible = skills.map((_, i) => {
//         const el = document.getElementById(`skill-${i}`);
//         return el && scrollY > el.offsetTop + 50;
//       });
//       setVisible(newVisible);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 text-center">Skills</h2>
//       <div className="row justify-content-center">
//         {skills.map((s,i) => (
//           <div key={i} id={`skill-${i}`} className={`col-12 col-sm-6 col-md-3 mb-3 skill-card ${visible[i] ? "slide-in" : ""}`}>
//             <div className="p-3 border-start border-4 border-danger bg-white shadow-sm">{s}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS3", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript (ES6+)", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React.js", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Bootstrap", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Git & GitHub", img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
    { name: "Node.js & Express", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "MongoDB (Basics)", img: "https://cdn-icons-png.flaticon.com/512/825/825500.png" },
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      setVisible(
        skills.map((_, i) => {
          const el = document.getElementById(`skill-${i}`);
          return el && scrollY > el.offsetTop + 80;
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills" className="skills-section container py-5">
      <h2 className="text-center mb-5">My Skills</h2>

      <div className="row">
        {skills.map((skill, i) => (
          <div
            key={i}
            id={`skill-${i}`}
            className={`col-12 col-md-3 mb-4 skill-item ${
              visible[i] ? "show" : ""
            }`}
          >
            <div className="skill-card">
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
