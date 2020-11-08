import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/AuthContext";

export default function Language() {
  const { handleLanguage } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    return await handleLanguage().then((response) => {
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
                  Languages
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
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Primary Language</strong>
                </div>
                <div>
                  <span>
                    {data.languages.primary_locale.language} (
                    {data.languages.primary_locale.country})
                  </span>
                </div>
              </div>
              {data.languages.profile_languages.length > 0 && (
                <div
                  style={{
                    fontWeight: "200",
                    letterSpacing: "0.07em",
                    textAlign: "center",
                    marginTop: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  <p>Profile Languages</p>
                </div>
              )}

              {data.languages.profile_languages?.map((item, key) => {
                return (
                  <div
                    key={key + `${item}`}
                    className="p-2 d-flex flex-row justify-content-center"
                  >
                    <div>
                      <strong className="pr-4">Language</strong>
                    </div>
                    <div>
                      <span>
                        {item.language} ({item.country})
                      </span>
                    </div>
                  </div>
                );
              })}
              {data.languages.supported_locales.length > 0 && (
                <div
                  style={{
                    fontWeight: "200",
                    letterSpacing: "0.07em",
                    textAlign: "center",
                    marginTop: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  <p>SUPPORTED locales</p>
                </div>
              )}
              {data.languages.supported_locales?.map((item, key) => {
                return (
                  <div
                    key={key + `${item}`}
                    className="p-2 d-flex flex-row justify-content-center"
                  >
                    <div>
                      <strong className="pr-4">Language</strong>
                    </div>
                    <div>
                      <span>
                        {item.language} ({item.country})
                      </span>
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
