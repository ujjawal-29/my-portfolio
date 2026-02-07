
// import Education from "./Education";

// export default function Home() {
//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row align-items-center">
//           <div className="col-md-6 mb-4">
//             <h1>Welcome!</h1>
//             <h2>Hello, I am <span className="text-danger">Ujjawal Kumar Singh</span></h2>
//             <p className="lead">I am a MERN Developer...</p>

//             {/* Buttons */}
//             <div className="d-flex gap-3 mt-3">
//               <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
//               <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="btn btn-dark">GitHub</a>
//               <a href="/resume.pdf" download className="btn btn-success">Resume</a>
//             </div>
//           </div>
//           <div className="col-md-6 text-center">
//             <div 
//               className="border border-danger rounded d-flex align-items-center justify-content-center"
//               style={{
//                 width: '100%',
//                 maxWidth: '400px',
//                 aspectRatio: '4/5',
//                 margin: '0 auto'
//               }}
//             >
//               <img 
//                 src="/im.jpg"
//                 alt="Ujjawal Kumar Singh"
//                 style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Education Section */}
//       <Education />
//     </div>
//   );
// }



// import Education from "./Education";
// import "./Home.css";   // नया CSS file use करेंगे

// export default function Home() {
//   return (
//     <div>
//       {/* Main Home Section */}
//       <div className="section">
//         <div className="photo-card">
//           <img src="/im.jpg" alt="profile" className="profile-img" />
//           <span className="emoji">😍</span>
//         </div>

//         <h2>Welcome!</h2>
//         <p>
//           Hello, I am <span className="highlight">Ujjawal Kumar Singh</span>.
//         </p>

//         <div className="terminal">
//           <span>info &gt; $</span> I am a MERN Developer.
//         </div>

//         <div className="btn-container">
//           <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
//             <button className="btn">GitHub</button>
//           </a>
//           <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
//             <button className="btn">LinkedIn</button>
//           </a>
//           <a href="/resume.pdf" download>
//             <button className="btn">Resume</button>
//           </a>
//         </div>
//       </div>

//       {/* Education Section same as before */}
//       <Education />
//     </div>
//   );
// }


// import Education from "./Education";
// import "./Home.css";
// import { FaThumbtack } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="home-section">
//       <div className="section">

//         {/* Photo Card */}
//         <div className="photo-card">
          
//           {/* Pin Icon */}
//           <div className="pin-icon">
//             <FaThumbtack />
//           </div>

//           <img src="/im.jpg" alt="profile" className="profile-img" />

//           {/* Emoji */}
//           <span className="emoji">😍</span>
//         </div>

//         {/* Text */}
//         <h2 className="title">Welcome !</h2>

//         <p className="intro">
//           Hello, I am <span className="highlight">Ujjawal</span>.
//         </p>

//         {/* Terminal */}
//         <div className="terminal">
//           <span className="terminal-prefix">info &gt; $</span> I am a MERN Developer.
//         </div>

//         {/* Buttons */}
//         <div className="btn-container">
//           <a href="https://github.com/ujjawal-29" target="_blank" rel="noreferrer">
//             <button className="btn">GitHub</button>
//           </a>
//           <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
//             <button className="btn">LinkedIn</button>
//           </a>
//           <a href="/resume.pdf" download>
//             <button className="btn">Resume</button>
//           </a>
//         </div>
//       </div>

//       <Education />
//     </div>
//   );
// }


import Education from "./Education";


import "./Home.css";
import { FaThumbtack, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        
        {/* Photo Card with Rotation */}
        <div className="photo-card-wrapper">
          <div className="photo-card">
            <FaThumbtack className="pin-icon" />
            <div className="image-container">
              <img src="/im.jpg" alt="profile" className="profile-img" />
            </div>
            <span className="emoji">😍</span>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-content">
          <h2 className="welcome-text">Welcome !</h2>
          <p className="intro-text">
            Hello, I am <span className="name-highlight">Ujjawal.</span>
          </p>

          {/* Terminal Box */}
          <div className="terminal-box">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <span className="info-tag">info &gt; </span>
              <span className="dollar">$</span> 
              <span className="dev-text"> I am a MERN Developer.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="button-group">
            <a href="https://github.com/ujjawal-29" target="_blank" className="nav-btn">
              GitHub <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" className="nav-btn">
              LinkedIn <FaLinkedin />
            </a>
            <a href="/resume.pdf" className="nav-btn">
              Resume <FaFilePdf />
            </a>
          </div>
        </div>
      </div>

      <Education />
    </div>
  );
}