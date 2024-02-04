'use client'
import HeadPage from "@/components/HeadPage";

export default function Help() {

  const helpVariants = [
    {
      id: 0,
      text: 'Не могу вернуться в Казахстан'
    },
    {
      id: 1,
      text: 'Не заселяют в отель'
    },
    {
      id: 2,
      text: 'Не могу вылететь в Казахстан'
    },
    {
      id: 3,
      text: 'Проблемы со здоровьем'
    },
    {
      id: 4,
      text: 'Утеря документов'
    },
  ]

  return (
      <div className='page-blank__container'>
        <div className="container">
          <div className="page-blank">
            <HeadPage title='Возникли проблемы с туром?' />
            <div className="help-list__wrap">
              <ul className="help-list list-reset">
                {
                  helpVariants && helpVariants.map(({id, text}) => {
                    return (
                        <li key={id} className='help-list__item'>
                          <span>
                            {text}
                          </span>
                          <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                                stroke='var(--color-primary)'
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 12H20.33"
                                stroke='var(--color-primary)'
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                          </svg>
                        </li>
                    )
                    })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}