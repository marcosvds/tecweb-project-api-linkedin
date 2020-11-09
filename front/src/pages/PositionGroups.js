import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AuthContext";

export default function PositionGroups() {
  const { handlePositionGroups } = useContext(Context);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    return await handlePositionGroups().then((response) => {
      console.log(response);
      setData(response);
      setLoading(false);
    });
  }, []);
  // const data = {
  //   positionGroups: [
  //     {
  //       company: {
  //         name: 'Talus Insper',
  //         logo:
  //           'https://media-exp1.licdn.com/dms/image/C4D0BAQGy4oCw-vHZ9w/company-logo_400_400/0?e=1612396800&v=beta&t=w3ViALGfxau4pyLNrkNp1pdNG4W_0Stj-__j7F22CoA',
  //         url: 'https://www.linkedin.com/company/talus-insper/',
  //         employees: { start: 2, end: 10 },
  //       },
  //       date: { start: { month: 3, year: 2020 } },
  //       profile_positions: [
  //         {
  //           location: 'Rua Quatá 200',
  //           date: { start: { month: 3, year: 2020 } },
  //           company: 'Talus Insper',
  //           title: 'Member of the Marketing department',
  //         },
  //       ],
  //     },
  //     {
  //       company: {
  //         name: 'Preparo',
  //         logo:
  //           'https://media-exp1.licdn.com/dms/image/C4D0BAQG1LSUOqcalfA/company-logo_400_400/0?e=1612396800&v=beta&t=E0x7rfWWdD0TORkvUJeFQ0zu_liE4c-TUUKA2pmj_ok',
  //         url: 'https://www.linkedin.com/company/preparovc/',
  //         employees: { start: 11, end: 50 },
  //       },
  //       date: { start: { month: 3, year: 2019 } },
  //       profile_positions: [
  //         {
  //           location: 'São Paulo',
  //           date: { start: { month: 3, year: 2019 } },
  //           company: 'Preparo',
  //           title: 'Co-founder and Chief Product Officer',
  //         },
  //       ],
  //     },
  //     {
  //       company: {
  //         name: 'Insper Mileage',
  //         logo:
  //           'https://media-exp1.licdn.com/dms/image/C4E0BAQEfVYpSNLao7A/company-logo_400_400/0?e=1612396800&v=beta&t=nq_AYtfdMxfhJlVGujp0agvabkbDJ5TZ_P8uXAejdN8',
  //         url: 'https://www.linkedin.com/company/insper-mileage/',
  //         employees: { start: 11, end: 50 },
  //       },
  //       date: {
  //         start: { month: 7, year: 2019 },
  //         end: { month: 1, year: 2020 },
  //       },
  //       profile_positions: [
  //         {
  //           location: 'Vila Olímpia, São Paulo',
  //           date: {
  //             start: { month: 7, year: 2019 },
  //             end: { month: 1, year: 2020 },
  //           },
  //           company: 'Insper Mileage',
  //           title: 'Member of the Mechanical Department',
  //         },
  //       ],
  //     },
  //     {
  //       company: {
  //         name: 'CNPq',
  //         logo:
  //           'https://media-exp1.licdn.com/dms/image/C4E0BAQGP85dIO52UEw/company-logo_400_400/0?e=1612396800&v=beta&t=aCeUthKPxBXW95Q0QFggtWt54GlLe7ysqHIeM31D-Jk',
  //         url: 'https://www.linkedin.com/company/cnpq---mct/',
  //         employees: { start: 1001, end: 5000 },
  //       },
  //       date: {
  //         start: { month: 8, year: 2013 },
  //         end: { month: 8, year: 2014 },
  //       },
  //       profile_positions: [
  //         {
  //           location: 'UTFPR',
  //           date: {
  //             start: { month: 8, year: 2013 },
  //             end: { month: 8, year: 2014 },
  //           },
  //           company: 'CNPq',
  //           title: 'Scientific Researcher',
  //         },
  //       ],
  //     },
  //     {
  //       company: {
  //         name: 'UTFPR',
  //         logo:
  //           'https://media-exp1.licdn.com/dms/image/C510BAQHv7sUT84RkCg/company-logo_400_400/0?e=1612396800&v=beta&t=7ffBRF0aVy2cm_wyKNhmxU1S8f2-c9yuKXmCT1Htnio',
  //         url: 'https://www.linkedin.com/company/utfpr/',
  //         employees: { start: 1001, end: 5000 },
  //       },
  //       date: {
  //         start: { month: 6, year: 2012 },
  //         end: { month: 6, year: 2013 },
  //       },
  //       profile_positions: [
  //         {
  //           location: 'Curitiba, Paraná',
  //           date: {
  //             start: { month: 6, year: 2012 },
  //             end: { month: 6, year: 2013 },
  //           },
  //           company: 'UTFPR',
  //           title: 'Estagiário',
  //         },
  //       ],
  //     },
  //   ],
  //   token:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTU0ZDc0MzU0MjNkODVmMDhkMzk4MyIsImlhdCI6MTYwNDY2ODc5OSwiZXhwIjoxNjA0NzU1MTk5fQ.4FqaRQFtMjJEwHb4PEQcBdJdY4l0eEz5JfTW_dZyxeg',
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
                  POSITION GROUPS
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
              {data.positionGroups?.map((item, key) => {
                return (
                  <div
                    key={key + `${item}`}
                    className="d-flex flex-row justify-content-start p-3"
                  >
                    <div className="d-flex">
                      <div style={{ marginRight: "1rem" }}>
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "100px",
                            border: "2px solid #c4c4c4",
                          }}
                          className="mx-auto d-block"
                          src={item.company.logo}
                          alt={item.company.name}
                        />
                      </div>
                      <div
                        style={{ marginRight: "2rem" }}
                        className="d-flex flex-row"
                      >
                        <div>
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "1rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.company.name}
                          </p>
                          <p style={{ fontWeight: "100", fontSize: "0.9rem" }}>
                            {item.company.employees.start} -{" "}
                            {item.company.employees.end} employees
                          </p>
                          <a href={item.company.url} target="_blank">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.2 0H0.8C0.3575 0 0 0.3575 0 0.8V19.2C0 19.6425 0.3575 20 0.8 20H19.2C19.6425 20 20 19.6425 20 19.2V0.8C20 0.3575 19.6425 0 19.2 0ZM5.9325 17.0425H2.965V7.4975H5.9325V17.0425ZM4.45 6.1925C4.10982 6.1925 3.77727 6.09162 3.49442 5.90263C3.21157 5.71363 2.99111 5.445 2.86093 5.13072C2.73074 4.81643 2.69668 4.47059 2.76305 4.13694C2.82942 3.8033 2.99323 3.49682 3.23378 3.25628C3.47432 3.01573 3.7808 2.85192 4.11444 2.78555C4.44809 2.71918 4.79393 2.75324 5.10822 2.88343C5.4225 3.01361 5.69113 3.23407 5.88013 3.51692C6.06912 3.79977 6.17 4.13232 6.17 4.4725C6.1675 5.4225 5.3975 6.1925 4.45 6.1925ZM17.0425 17.0425H14.0775V12.4C14.0775 11.2925 14.0575 9.87 12.535 9.87C10.9925 9.87 10.755 11.075 10.755 12.32V17.0425H7.7925V7.4975H10.6375V8.8025H10.6775C11.0725 8.0525 12.04 7.26 13.485 7.26C16.49 7.26 17.0425 9.2375 17.0425 11.8075V17.0425V17.0425Z"
                                fill="#c4c4c4"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex">
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
                              Start: {item.date?.start.month}/
                              {item.date?.start.year}
                            </span>
                          </div>
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
                              <span>
                                End: {item.date?.end.month}/
                                {item.date?.end.year}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          {item.profile_positions?.map((subItem, subKey) => {
                            return (
                              <div key={subKey + key}>
                                <p>{subItem.location}</p>
                              </div>
                            );
                          })}
                        </div>
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
