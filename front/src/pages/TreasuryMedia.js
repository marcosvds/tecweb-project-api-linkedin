import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/AuthContext";

export default function TreasuryMedia() {
  const { handleTreasuryMedia } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    return await handleTreasuryMedia().then((response) => {
      console.log("response", response);
      setData(response);
      setLoading(false);
    });
  }, []);

  console.log("treasury", data);
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
                  Treasury Media
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
              {data.treasuryMedia?.map((item, key) => {
                return (
                  <div key={key}>
                    <p style={{ fontWeight: "900", fontSize: "1.2rem" }}>
                      {item.title}
                    </p>
                    <p>{item.description}</p>
                    <img src={item.image} />
                    {/* <iframe
                      id="player"
                      type="text/html"
                      width="640"
                      height="360"
                      src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                      frameborder="0"
                    ></iframe> */}
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
