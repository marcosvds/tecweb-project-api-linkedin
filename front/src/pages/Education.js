import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { Context } from "../Context/AuthContext";

export default function Education() {
  const { handleEducation } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    return await handleEducation().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

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
                  Education
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f1f1f1",
              borderRadius: "0px 20px 20px 20px",
              marginTop: "2rem",
            }}
            className="container p-3"
          >
            <div className="d-flex flex-column">
              {data.education?.map((item, key) => {
                return (
                  <div
                    key={`${key}+${item.school.name}`}
                    className="p-2 d-flex flex-row justify-content-start"
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "100px",
                          border: "2px solid #c4c4c4",
                        }}
                        className="mx-auto d-block"
                        src={item.school.logo}
                        alt={item.school.name}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.degree_name}
                      </p>
                      <p>{item.field_of_study}</p>

                      <div className="d-flex">
                        {item.date?.start && (
                          <div
                            style={{
                              backgroundColor: "#c4c4c4",
                              height: "fit-content",
                              color: "#ffffff",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "1rem",
                              marginRight: "1rem",
                              fontSize: "0.8rem",
                            }}
                          >
                            <span>
                              Start:
                              {item.date?.start.year}
                            </span>
                          </div>
                        )}
                        {item.date?.end && (
                          <div
                            style={{
                              backgroundColor: "#c4c4c4",
                              height: "fit-content",
                              color: "#ffffff",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "1rem",
                              fontSize: "0.8rem",
                            }}
                          >
                            <span>End: {item.date?.end.year}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
