
// import { useEffect, useState } from "react";
// import "./Projects.css";

// export default function Projects() {
//   const projects = [
//     {
//       title: "PDF Merger",
//       img: "/images/pdf-merger.png",
//       desc: "A web tool to merge multiple PDF files into a single PDF.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Digital Clock",
//       img: "/images/rock.png",
//       desc: "Real-time digital clock showing current time.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Rock Paper Scissors",
//       img: "/images/rock.png",
//       desc: "Interactive Rock Paper Scissors game.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Tic Tac Toe",
//       img: "/images/tic.png",
//       desc: "Classic Tic Tac Toe game.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//   ];

//   const [visible, setVisible] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + window.innerHeight;
//       setVisible(
//         projects.map((_, i) => {
//           const el = document.getElementById(`project-${i}`);
//           return el && scrollY > el.offsetTop + 100;
//         })
//       );
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div id="projects" className="projects-section container py-5">
//       <h2 className="text-center mb-5">My Projects</h2>

//       <div className="row">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             id={`project-${i}`}
//             className={`col-12 col-md-6 col-lg-3 mb-4 project-item ${
//               visible[i] ? "show" : ""
//             }`}
//           >
//             <div className="card h-100">
//               <img src={p.img} className="card-img-top" alt={p.title} />

//               <div className="card-body">
//                 <h5 className="card-title">{p.title}</h5>
//                 <p className="card-text">{p.desc}</p>
//                 <p><strong>Languages:</strong> {p.tech}</p>

//                 <div className="project-buttons">
//                   <a href={p.live} className="btn1">View Project</a>
//                   <a href={p.code} className="btn1">View Code</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import "./Projects.css";

// export default function Projects() {
//   const projects = [
//     {
//       title: "PDF Merger",
//       img: "/images/pdf merger.png", // public/images folder ke liye
//       desc: "A web tool to merge multiple PDF files into a single PDF.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Digital Clock",
//       img: "/images/time.png",
//       desc: "Real-time digital clock showing current time.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Rock Paper Scissors",
//       img: "/images/rock.png",
//       desc: "Interactive Rock Paper Scissors game.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//     {
//       title: "Tic Tac Toe",
//       img: "/images/tic.png",
//       desc: "Classic Tic Tac Toe game.",
//       tech: "HTML, CSS, JavaScript",
//       live: "#",
//       code: "#",
//     },
//   ];

//   const [visible, setVisible] = useState(
//     new Array(projects.length).fill(false)
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + window.innerHeight;
//       setVisible(
//         projects.map((_, i) => {
//           const el = document.getElementById(`project-${i}`);
//           if (!el) return false;
//           return scrollY > el.offsetTop + 50; // scroll animation trigger
//         })
//       );
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [projects.length]);

//   return (
//     <div id="projects" className="projects-section container py-5">
//       <h2 className="text-center mb-5">My Projects</h2>

//       <div className="row">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             id={`project-${i}`}
//             className={`col-12 col-md-6 col-lg-3 mb-4 project-item ${
//               visible[i] ? "show" : ""
//             }`}
//           >
//             <div className="card h-100">
//               <img src={p.img} className="card-img-top" alt={p.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{p.title}</h5>
//                 <p className="card-text">{p.desc}</p>
//                 <p><strong>Languages:</strong> {p.tech}</p>
//                 <div className="project-buttons">
//                   <a href={p.live} className="btn1">View Project</a>
//                   <a href={p.code} className="btn1">View Code</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import "./Projects.css";

// export default function Projects() {

// const projects = [
//   {
//     title: "PDF Merger",
//     img: "/images/pdf merger.png",
//     desc: "A web tool to merge multiple PDF files into a single PDF.",
//     tech: "HTML, CSS, JavaScript",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Digital Clock",
//     img: "/images/time.png",
//     desc: "Real-time digital clock showing current time.",
//     tech: "HTML, CSS, JavaScript",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Rock Paper Scissors",
//     img: "/images/rock.png",
//     desc: "Interactive Rock Paper Scissors game.",
//     tech: "HTML, CSS, JavaScript",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Tic Tac Toe",
//     img: "/images/tic.png",
//     desc: "Classic Tic Tac Toe game.",
//     tech: "HTML, CSS, JavaScript",
//     live: "#",
//     code: "#",
//   },

//   // 🔥 NEW PROJECT ADDED
//   {
//   title: "iNotebook (MERN App)",
//   img: "/images/inotebook.png",
//   desc: "A full-stack note-taking application with user authentication, CRUD operations, and secure backend APIs.",
//   tech: "React, Node.js, Express.js, MongoDB",
//   live: "https://inotebook-two-eta.vercel.app/",
//   code: "https://github.com/ujjawal-29/inotebook",
// }
// ,
// ];
// }



import { useEffect, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "PDF Merger",
      img: "/images/pdf merger.png",
      desc: "A web tool to merge multiple PDF files into a single PDF.",
      tech: "HTML, CSS, JavaScript",
      live: "#",
      code: "#",
    },
    {
      title: "Digital Clock",
      img: "/images/time.png",
      desc: "Real-time digital clock showing current time.",
      tech: "HTML, CSS, JavaScript",
      live: "#",
      code: "#",
    },
    {
      title: "Rock Paper Scissors",
      img: "/images/rock.png",
      desc: "Interactive Rock Paper Scissors game.",
      tech: "HTML, CSS, JavaScript",
      live: "#",
      code: "#",
    },
    {
      title: "Tic Tac Toe",
      img: "/images/tic.png",
      desc: "Classic Tic Tac Toe game.",
      tech: "HTML, CSS, JavaScript",
      live: "#",
      code: "#",
    },
    {
      title: "iNotebook (MERN App)",
      img: "/images/inote.png",
      desc: "A full-stack note-taking application with authentication, CRUD operations, and secure backend APIs.",
      tech: "React, Node.js, Express.js, MongoDB",
      live: "https://inotebook-two-eta.vercel.app/",
      code: "https://github.com/ujjawal-29/inotebook",
    },
  ];

  const [visible, setVisible] = useState(
    new Array(projects.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      setVisible(
        projects.map((_, i) => {
          const el = document.getElementById(`project-${i}`);
          if (!el) return false;
          return scrollY > el.offsetTop + 50;
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <div id="projects" className="projects-section container py-5">
      <h2 className="text-center mb-5">My Projects</h2>

      <div className="row">
        {projects.map((p, i) => (
          <div
            key={i}
            id={`project-${i}`}
            className={`col-12 col-md-6 col-lg-3 mb-4 project-item ${
              visible[i] ? "show" : ""
            }`}
          >
            <div className="card h-100">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
                <p>
                  <strong>Languages:</strong> {p.tech}
                </p>
                <div className="project-buttons">
                  <a
                    href={p.live}
                    className="btn1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href={p.code}
                    className="btn1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
