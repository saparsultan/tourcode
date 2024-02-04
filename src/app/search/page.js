"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import "@/sass/home.scss";
import HeadPage from "@/components/HeadPage";

export default function SearchTourCode() {
  const [tourCode, setTourCode] = useState("");
  const [tourCodeInfo, setTourCodeInfo] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchData && searchData !== "") {
      setLoading(true);
      fetch(`/api/tourcode/${searchData}`)
          .then(async (response) => {
            const result = await response.json();
            setTourCodeInfo(result);
            const clientsFunc = () => {
              if (result && result?.data) {
                result.data.clients.map((item, i) => {
                  const itemData = item?.params_hash?.c_doc_number;
                  setClients(itemData);
                });
              }
            };

            clientsFunc();
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            console.log({ e });
          });
    }
  }, [searchData]);

  const onClickTourCode = () => {
    setSearchData(tourCode);
  };

  return (
      <div className="page-blank__container" style={{ margin: "20px 0" }}>
        <div className="container">
          <div className="page-blank">
            <HeadPage title='Проверка туркода' />
            <div className="page-blank__search">
              <div className="page-blank__field">
                <input
                    type="text"
                    className="page-blank__input"
                    placeholder="Введите туркод"
                    value={tourCode}
                    onChange={(e) => setTourCode(e.target.value)}
                />
              </div>
              <div
                  className="item-btn item-btn--primary"
                  onClick={onClickTourCode}
              >
                <span>Проверить</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                  <path
                      d="M3.5 12H20.33"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </div>
              {tourCodeInfo !== null && tourCodeInfo?.data !== null &&
                  tourCodeInfo &&
                  tourCodeInfo?.data && typeof tourCodeInfo?.data === 'object' &&
                  !loading && (
                      <div className="main-grid__item" style={{margin: "20px 0"}}>
                  <span className="main-grid__label">
                    Возникли проблемы с туром?
                  </span>
                        <Link
                            href={`https://api.whatsapp.com/send?phone=+77018880395&text=Здравствуйте!🆘%0AПрошу оказать содействие в возврате в Казахстан.%0A%0AМои данные:%0AНомер тура в реестре: ${
                                tourCodeInfo?.data?.params_hash?.q_number
                            },%0AНачало тура: ${
                                tourCodeInfo?.data?.params_hash?.q_date_from
                            },%0AКонец тура: ${
                                tourCodeInfo?.data?.params_hash?.q_date_to
                            },%0AСтрана: ${
                                tourCodeInfo?.data?.params_hash?.q_country
                            },%0AКод авиакомпании-перевозчика (первой): ${
                                tourCodeInfo?.data?.params_hash?.q_airlines
                            },%0AКод аэропорта вылета (Казахстан): ${
                                tourCodeInfo?.data?.params_hash?.q_airport_start
                            },%0AКод аэропорта прилета (первый): ${
                                tourCodeInfo?.data?.params_hash?.q_airport
                            },%0AОрганизация-турагент: ${
                                tourCodeInfo?.data?.params_hash?.q_touragent
                            },%0A%0AПаспорта туристов:%0A${
                                clients.length > 0 && clients.toString()
                            }
                `}
                            target="_blank"
                            className="main-grid__link"
                        >
                          SOS (Направить обращение)
                        </Link>
                      </div>
                  )}
            </div>
            {tourCodeInfo !== null && tourCodeInfo?.data !== null &&
            tourCodeInfo &&
            tourCodeInfo?.data && typeof tourCodeInfo?.data === 'object' &&
                !loading ? (
                <>
                  <div className="page-blank__content blank-content">
                    <div className="blank-content__name">
                      Тур № {tourCodeInfo?.data?.params_hash?.q_number}
                    </div>
                    <div className="blank-content__caption">Данные о туре</div>
                    <ul className="blank-content__list">
                      <li className="blank-content__item">
                        <span>Номер тура в реестре</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_number}</span>
                      </li>
                      <li className="blank-content__item">
                        <span>Начало тура</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_date_from}</span>
                      </li>
                      <li className="blank-content__item">
                        <span>Конец тура</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_date_to}</span>
                      </li>

                      <li className="blank-content__item">
                        <span>Страна</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_country}</span>
                      </li>
                      <li className="blank-content__item">
                        <span>Код авиакомпании-перевозчика (первой)</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_airlines}</span>
                      </li>
                      <li className="blank-content__item">
                        <span>Код аэропорта вылета (Казахстан) </span>
                        <span>
                      {tourCodeInfo?.data?.params_hash?.q_airport_start}
                    </span>
                      </li>

                      <li className="blank-content__item">
                        <span>Код аэропорта прилета (первый)</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_airport}</span>
                      </li>
                      <li className="blank-content__item">
                        <span>Организация-турагент</span>
                        <span>{tourCodeInfo?.data?.params_hash?.q_touragent}</span>
                      </li>
                    </ul>
                    <div className="blank-content__caption">
                      Туристы(
                      {tourCodeInfo?.data?.clients &&
                          tourCodeInfo?.data?.clients?.length &&
                          tourCodeInfo?.data?.clients.length}
                      )
                    </div>
                    {tourCodeInfo &&
                        tourCodeInfo?.data?.clients &&
                        tourCodeInfo?.data?.clients.map((item, i) => {
                          return (
                              <ul className="blank-content__list" key={i}>
                                <li className="blank-content__item">
                                  <span>Паспорт</span>
                                  <span>{item?.params_hash?.c_doc_number}</span>
                                </li>
                                {/*<li className="blank-content__item">*/}
                                {/*  <span>Паспорт выдан </span>*/}
                                {/*  <span>329CH40114-14989564</span>*/}
                                {/*</li>*/}
                                {/*<li className="blank-content__item">*/}
                                {/*  <span>Срок действия паспорта</span>*/}
                                {/*  <span>329CH40114-14989564</span>*/}
                                {/*</li>*/}
                                {/*<li className="blank-content__item">*/}
                                {/*  <span>Статус резидентства </span>*/}
                                {/*  <span>329CH40114-14989564</span>*/}
                                {/*</li>*/}
                              </ul>
                          );
                        })}
                  </div>
                </>
            ) : (
                !loading && (
                    <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "30px",
                          background: "#fff",
                          borderRadius: "12px",
                        }}
                    >
                      Нет результатов
                    </div>
                )
            )}
            {loading && (
                <div className="loader" style={{marginTop: "20px"}}>
                  <Loading/>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}