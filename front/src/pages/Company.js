import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { Context } from "../Context/AuthContext";

export default function Company() {
  const { handleCompany } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    return await handleCompany().then((response) => {
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
            className="container p-3">
            <div className="d-flex flex-column">
              <div>
                <a href="/home">back</a>
              </div>
              <div>
                <p
                  style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
                  className="h4 text-center">
                  Company
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}