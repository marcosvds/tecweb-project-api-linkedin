import React from "react";
export default function Skills() {
  const data = {
    skills: [
      //skills
      "Projetos",
      "Liderança",
      "Oratória",
      "Gestão de projetos",
      "Tradução técnica",
      "Redação",
      "Web design",
      "Design de logomarca",
      "Design de produtos",
      "Usinagem",
      "CAD/CAM",
      "Desenho técnico",
      "CAD",
      "Pesquisa",
      "Microsoft Excel",
      "Microsoft Office",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "SolidWorks",
      "Python",
    ],
    token: "janipsydapsjdbasy9d6a789sdahsjnas",
  };
  return (
    <div style={{ fontFamily: "Lato" }}>
      <div
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: "0px 0px 20px 0px",
        }}
        className="container p-3"
      >
        <div className="d-flex flex-column">
          <div>
            <a href="/home">back</a>
          </div>
          <div>
            <p
              style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
              className="h4 text-center"
            >
              Skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
