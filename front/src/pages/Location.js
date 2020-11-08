import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/AuthContext";

export default function Location() {
  const { handleLocation } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    return await handleLocation().then((response) => {
      console.log("response", response);
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
                  Location
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
                  <strong className="pr-4">País</strong>
                </div>
                <div>
                  <span>{data.location.country}</span>
                </div>
              </div>
              <div className="p-2 d-flex flex-row justify-content-center">
                <div>
                  <strong className="pr-4">Cidade/Estado</strong>
                </div>
                <div>
                  <span>{data.location.short}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
