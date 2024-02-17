"use client";
import Link from "next/link";
import {useEmptyModal} from "@/store/zustand";
import "@/sass/home.scss";

export default function Home() {
  const {toggleModal} = useEmptyModal()
  return (
      <div className="main-grid__container">
        <div className="container">
          <div className="main-grid">
            {/*<div className="main-grid__item">*/}
            {/*  <span className="main-grid__label">*/}
            {/*    Список турагентств системы гарантирования*/}
            {/*  </span>*/}
            {/*  <div className="item-btn">*/}
            {/*    <span>НАЙТИ</span>*/}
            {/*    <svg*/}
            {/*      width="24"*/}
            {/*      height="24"*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*      fill="none"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        d="M14.4297 5.92999L20.4997 12L14.4297 18.07"*/}
            {/*        stroke="#292D32"*/}
            {/*        strokeWidth="1.5"*/}
            {/*        strokeMiterlimit="10"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*      />*/}
            {/*      <path*/}
            {/*        d="M3.5 12H20.33"*/}
            {/*        stroke="#292D32"*/}
            {/*        strokeWidth="1.5"*/}
            {/*        strokeMiterlimit="10"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="main-grid__item">
            <span className="main-grid__label">
              Список турагенств системы гарантирования
            </span>
              <Link href="/travel-agencies" className="item-btn">
                <span>НАЙТИ</span>
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
              </Link>
            </div>

            <div className="main-grid__item">
              <span className="main-grid__label">Ваш туркод</span>
              <Link href="/search" className="item-btn item-btn--primary">
                <span>ПРОВЕРИТЬ</span>
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
              </Link>
              <div className="no-tourcode" onClick={() => toggleModal()}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7799 0.0313184C10.6508 0.053474 10.2497 0.119096 9.88835 0.177207C9.05219 0.311549 7.5122 0.812116 6.73553 1.202C4.40517 2.37193 2.38103 4.3955 1.21407 6.72212C0.7531 7.64092 0.295513 9.12478 0.134194 10.2237C-0.42775 14.0512 0.787918 17.7018 3.54171 20.4567C6.2877 23.2036 9.96211 24.4296 13.7591 23.8657C16.3401 23.4823 18.5656 22.3497 20.458 20.4567C23.2039 17.7097 24.4294 14.0339 23.8657 10.2356C23.6198 8.57925 22.7022 6.17893 22.0711 5.54121C21.6507 5.11631 20.8213 5.43916 20.8213 6.02769C20.8213 6.15791 21.0279 6.67734 21.2805 7.18194C22.1205 8.86014 22.4388 10.1799 22.4413 11.9954C22.4438 13.731 22.1189 15.1365 21.3694 16.632C20.8064 17.7557 20.3113 18.4358 19.3746 19.3729C17.8172 20.9309 16.18 21.8151 13.9835 22.2844C13.1156 22.4698 11.0893 22.4934 10.2209 22.3283C8.78896 22.056 7.26735 21.4294 6.05122 20.6115C5.30449 20.1093 3.88077 18.681 3.37081 17.9224C2.55765 16.7131 1.94512 15.2185 1.67091 13.775C1.39162 12.305 1.57096 10.1156 2.09349 8.61577C3.68604 4.04458 8.24015 1.08803 12.9447 1.57094C14.8145 1.76293 16.2867 2.28696 17.8147 3.30462C18.8395 3.98712 19.1551 4.06232 19.4911 3.70455C19.7885 3.3878 19.7647 2.89521 19.4371 2.58973C18.4206 1.64182 16.3843 0.670169 14.5337 0.249776C13.7694 0.0761925 11.3409 -0.065096 10.7799 0.0313184ZM7.40193 8.01559C6.8535 8.21499 6.30535 8.59662 5.86156 9.08808C5.55853 9.4236 5.51423 9.52621 5.56416 9.77631C5.65876 10.2492 5.94433 10.4472 6.47877 10.4103C6.56492 10.4044 6.85894 10.2086 7.13212 9.97524C7.99184 9.24119 8.67287 9.23612 9.22468 9.95984C9.55999 10.3997 9.95273 10.5378 10.3231 10.3461C10.6301 10.1873 10.8171 9.80954 10.7403 9.50349C10.6635 9.19726 9.96512 8.45345 9.49664 8.17876C8.95694 7.86238 8.02337 7.78963 7.40193 8.01559ZM14.8391 7.99616C14.3108 8.16871 13.5744 8.64863 13.2225 9.04959C12.7692 9.56602 12.8564 10.1932 13.4082 10.3857C13.7631 10.5094 13.9208 10.4542 14.3815 10.0447C14.8646 9.61521 15.5111 9.3331 15.8324 9.41168C15.9697 9.44529 16.3017 9.68825 16.5701 9.95177C17.1347 10.5059 17.4788 10.5748 17.8659 10.211C18.262 9.83874 18.1891 9.45008 17.6078 8.83507C17.3371 8.54883 16.9477 8.22889 16.7424 8.12412C16.2718 7.88398 15.3682 7.82324 14.8391 7.99616ZM11.0614 13.592C9.80445 13.7488 8.53614 14.3726 7.52749 15.3299C6.87208 15.9521 6.79203 16.2042 7.11842 16.6193C7.34693 16.9098 7.71096 17.0125 7.98996 16.8651C8.10501 16.8042 8.3949 16.5793 8.63411 16.3653C9.16105 15.8938 10.0676 15.3979 10.7206 15.224C11.3651 15.0523 12.3598 15.0601 13.0656 15.2424C13.7595 15.4216 14.9359 16.018 15.4367 16.4444C16.1377 17.0412 16.5137 17.0867 16.8813 16.6193C17.2654 16.1308 17.0313 15.6936 15.9858 14.9474C14.5171 13.8989 12.6719 13.3911 11.0614 13.592Z"
                      fill="#9CA2B2"
                  />
                </svg>
                <div>У меня нет туркода</div>
              </div>
            </div>
            <div className="main-grid__item">
              <span className="main-grid__label">Возникли проблемы с туром?</span>
              <Link
                  href="/help"
                  // target='_blank'
                  className="main-grid__link"
              >
                SOS
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
