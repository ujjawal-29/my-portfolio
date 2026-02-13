
// import React from "react";

// export default function About() {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">About Me</h2>
//       <p className="lead">
//         Hello! I am <strong>Ujjawal Kumar Singh</strong>, a passionate MERN Developer
//         with expertise in creating responsive and modern web applications. I enjoy
//         building interactive UIs, implementing APIs, and learning new technologies.
//         My goal is to deliver clean and efficient code while continuously improving
//         my skills.
//       </p>
//       <p className="lead">
//         I love solving problems, collaborating with teams, and contributing to
//         innovative projects. Always eager to learn and grow in the ever-evolving
//         tech world.
//       </p>
//     </div>
//   );
// }


// import "./About.css";

// export default function About() {
//   return (
//     <section className="about-section" id="about">
//       <h2 className="section-title">About me</h2>

//       {/* Terminal Style Card */}
//       <div className="terminal-card">
//         <div className="terminal-header">
//           <span className="dot red"></span>
//           <span className="dot yellow"></span>
//           <span className="dot green"></span>
//         </div>

//         <div className="terminal-body">
//           <p className="terminal-line">info &gt; $ About Me</p>
//           <p className="terminal-text">
//             <span className="hello">Hello!</span> I'm Satyendra, currently
//             pursuing my Master's in Computer Applications (MCA) at Noida
//             International University. As a first-year student, I'm passionate
//             about diving deep into the world of technology and software
//             development. My academic journey is driven by a curiosity for how
//             things work and a desire to create innovative solutions that can
//             make a difference.
//             <br /><br />
//             I'm eager to explore various aspects of computer science, from
//             coding and algorithms to data structures and software engineering.
//             My goal is to build a strong foundation in these areas and develop
//             the skills necessary to excel in the tech industry.
//           </p>
//         </div>
//       </div>

//       {/* My Idols Section */}
//       <h2 className="section-title">My Idols</h2>

//       <div className="idol-card">
//         <img
//           src="/images/harry.jpg"   // apni image ka path yahan do
//           alt="Harish Khan"
//           className="idol-image"
//         />

//         <h3 className="idol-name">Harish Khan (CWH)</h3>

//         <p className="idol-text">
//           Meet my coding idol, the one and only Harish Khan (Harry 🚀).
//           Harry has been my go-to guide in the vast world of programming.
//           From Python to web development, his tutorials are not just
//           informative but also infused with a unique blend of enthusiasm
//           and humor.
//         </p>
//       </div>
//     </section>
//   );
// }


import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About me</h2>

      {/* Terminal Style Card */}
      <div className="terminal-card">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="terminal-body">
          <p className="terminal-line">info &gt; $ About Me</p>
          <p className="terminal-text">
            <span className="hello">Hello!</span> I'm Ujjawal, currently
            pursuing my Master's in Computer Applications (MCA) at Noida
            International University. As a first-year student, I'm passionate
            about diving deep into the world of technology and software
            development. My academic journey is driven by a curiosity for how
            things work and a desire to create innovative solutions that can
            make a difference.
            <br /><br />
            I'm eager to explore various aspects of computer science, from
            coding and algorithms to data structures and software engineering.
            My goal is to build a strong foundation in these areas and develop
            the skills necessary to excel in the tech industry.
          </p>
        </div>
      </div>

      {/* My Idols Section */}
      <h2 className="section-title">My Idols</h2>

      {/* Virat Kohli Card */}
      <div className="idol-card my-5">
        <img
          src="/images/virate.jpg"   // Virat ki image ka path yahan do
          alt="Virat Kohli"
          className="idol-image"
        />
        <h3 className="idol-name">Virat Kohli</h3>
        <p className="idol-text ">
          Meet my sports idol, Virat Kohli 🏏. Virat is not only one of the
          greatest cricketers of our time but also a true example of
          dedication, discipline, and hard work. His focus, consistency, and
          determination on and off the field inspire me to pursue excellence
          in everything I do.
        </p>
      </div>

      {/* Harish Khan Card */}
      <div className="idol-card">
        <img
          src="/images/harry.jpg"   // apni image ka path yahan do
          alt="Harish Khan"
          className="idol-image"
        />
        <h3 className="idol-name">Harish Khan (CWH)</h3>
        <p className="idol-text">
          Meet my coding idol, the one and only Harish Khan (Harry 🚀).
          Harry has been my go-to guide in the vast world of programming.
          From Python to web development, his tutorials are not just
          informative but also infused with a unique blend of enthusiasm
          and humor.
        </p>
      </div>
    </section>
  );
}
