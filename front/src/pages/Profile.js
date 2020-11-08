import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { Context } from "../Context/AuthContext";

export default function Profile() {
  const { handleProfile } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  console.log("data", data);
  console.log("token", api.defaults.headers.Authorization);

  useEffect(async () => {
    return await handleProfile().then((response) => {
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
                  Profile
                </p>
              </div>
              <div className="text-center">
                <img
                  style={{ width: "200px", borderRadius: "100px" }}
                  className="border mx-auto d-block"
                  src={data.profilePicture}
                  alt={data.first_name + data.last_name + "image"}
                />
              </div>
              <div className="text-center">
                <p className="h5 mt-3">
                  <span>
                    {data.first_name} <span>{data.last_name}</span>
                  </span>
                </p>
              </div>
              <div className="d-flex text-center justify-content-center">
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "300",
                    width: "50rem",
                  }}
                >
                  {data.summary}
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
              {data.birth_date && (
                <div className="p-2 d-flex flex-row justify-content-center">
                  <div>
                    <strong className="pr-4">Data de Nascimento</strong>
                  </div>
                  <div>
                    <span>{data.birth_date}</span>
                  </div>
                </div>
              )}
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Premim</strong>
                </div>
                <div>
                  <span>{data.premium ? "Sim" : "Não"}</span>
                </div>
              </div>
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Influencer</strong>
                </div>
                <div>
                  <span>{data.influencer ? "Sim" : "Não"}</span>
                </div>
              </div>
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Industry</strong>
                </div>
                <div>
                  <span>{data.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
