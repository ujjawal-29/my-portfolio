
import { useEffect, useState } from "react";
import "./Education.css";

export default function Education() {
  const education = [
    { title: "10TH", board: "BSEB", year: "2018", marks: "65%", logo: "/bihar.jpg" },
    { title: "12TH", board: "SCIENCE - BSEB", year: "2018 - 2020", marks: "71%", logo: "/bihar.jpg" },
    { title: "BCA", board: "BRBU", year: "2020 - 2023", marks: "71%", logo: "/bb.jpg" },
    { title: "MCA", board: "NIU", year: "PURSUING", marks: "CGPA 9.02", logo: "/niuu.png" },
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const newVisible = education.map((_, i) => {
        const el = document.getElementById(`edu-${i}`);
        return el && scrollY > el.offsetTop + 50;
      });
      setVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Education</h2>

      <div className="row justify-content-center">
        {education.map((e, i) => (
          <div key={i} id={`edu-${i}`} className="col-12 col-sm-6 col-md-3 mb-5 d-flex justify-content-center">
            <div className={`edu-circle ${visible[i] ? "slide-in" : ""}`}>
              <div className="edu-logo">
                <img src={e.logo} alt={e.title} />
              </div>
              <h6 className="fw-bold">{e.title}</h6>
              <p>{e.board}</p>
              <p>YEAR : {e.year}</p>
              <p className="fw-bold">{e.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
