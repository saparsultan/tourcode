"use client";
import React, { useEffect, useState } from "react";
import "@/sass/page.scss";
import Loading from "@/components/Loading";
import Link from "next/link";

export default function SearchTourCode() {
  const [tourCode, setTourCode] = useState("");
  const [tourCodeInfo, setTourCodeInfo] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchData && searchData !== "") {
      setLoading(true);
      fetch(`/api/tourcode/${searchData}`)
        .then(async (response) => {
          const result = await response.json();
          setTourCodeInfo(result);
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
    <div className="page-blank">
      <div className="container">
        <div className="page-blank">
          <h2 className="page-blank__title">Проверка туркода</h2>
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
          </div>
          {tourCodeInfo !== null &&
          tourCodeInfo &&
          tourCodeInfo?.data &&
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
                    <span>Код авиакомпании-перевозчика (первой) </span>
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
              <div className="main-grid__item" style={{ margin: "20px 0" }}>
                <span className="main-grid__label">
                  Возникли проблемы с туром?
                </span>
                <Link
                  href="https://api.whatsapp.com/send/?phone=77018880395&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="main-grid__link"
                >
                  SOS
                </Link>
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
                  marginTop: "20px",
                }}
              >
                Нет результатов
              </div>
            )
          )}
          {loading && (
            <div className="loader" style={{ marginTop: "20px" }}>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
