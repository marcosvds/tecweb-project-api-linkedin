import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AuthContext";
export default function Skills() {
  const { handleSkills } = useContext(Context);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    return await handleSkills().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  // const data = {
  //   skills: [
  //     //skills
  //     "Projetos",
  //     "Liderança",
  //     "Oratória",
  //     "Gestão de projetos",
  //     "Tradução técnica",
  //     "Redação",
  //     "Web design",
  //     "Design de logomarca",
  //     "Design de produtos",
  //     "Usinagem",
  //     "CAD/CAM",
  //     "Desenho técnico",
  //     "CAD",
  //     "Pesquisa",
  //     "Microsoft Excel",
  //     "Microsoft Office",
  //     "Microsoft PowerPoint",
  //     "Microsoft Word",
  //     "SolidWorks",
  //     "Python",
  //   ],
  //   token: "janipsydapsjdbasy9d6a789sdahsjnas",
  // };

  return (
    <div style={{ fontFamily: "Lato" }}>
      {loading ? (
        <h1>carregando...</h1>
      ) : (
        <>
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
          <div
            style={{
              backgroundColor: "#f1f1f1",
              borderRadius: "0px 20px 20px 0px",
              marginTop: "2rem",
            }}
            className="container p-3"
          >
            <div className="d-flex flex-column">
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Abilitys</strong>
                </div>
                <div>
                  {data.skills?.map((item, key) => {
                    return (
                      <div key={key}>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
