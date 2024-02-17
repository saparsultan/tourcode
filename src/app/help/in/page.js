'use client'
import HeadPage from "@/components/HeadPage";
import {useHelpInfoModal} from "@/store/zustand";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function HelpIn() {
  const router = useRouter()
  const {toggleModal, setData, inData} = useHelpInfoModal()

  console.log({inData})


  const helpVariants = [
    [
      {
        id: 0,
        text: 'Бонкротство туроператора',
        ispPrevInfo: false
      },
      {
        id: 1,
        text: 'Угроза жизни и здоровью туриста',
        ispPrevInfo: false
      },
      {
        id: 2,
        text: 'Введение чрезвычайного положения',
        ispPrevInfo: false
      },
    ],
    [
      {
        id: 0,
        text: 'Бонкротство туроператора',
        ispPrevInfo: false
      },
      {
        id: 1,
        text: 'Мошеннические действия турагентства',
        ispPrevInfo: false
      },
      {
        id: 2,
        text: 'Необоснованное незаселение со стороны отеля',
        ispPrevInfo: false
      },
    ],
    [
      {
        id: 0,
        text: 'По объективным причинам со стороны туриста (болезнь и т.д.)',
        ispPrevInfo: false,
        content: `<div class="modal__text-info">
          <ol>
            <li>
              <p>
                Сбор документов, подтверждающих факт невозможности вылета в страну отдыха.
              </p>
              <div class="tooltip-wrap">
                   <div class="tooltip-btn" data-tooltip-id="my-tooltip" data-tooltip-variant="info" data-tooltip-place="right-start" data-tooltip-content="С приложением подтверждающих документов (справка, выписка лечебного учреждения, заверенная лечебным учреждением).">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#D5251B"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9945 16C10.9945 15.4477 11.4422 15 11.9945 15H12.0035C12.5558 15 13.0035 15.4477 13.0035 16C13.0035 16.5523 12.5558 17 12.0035 17H11.9945C11.4422 17 10.9945 16.5523 10.9945 16Z" fill="#D5251B"/>
                    </svg>
                  </div>
              </div>
            </li>
            <li>
              <p>Оформление и направление заявления о возврате средств в адрес туроператора, турагентства в соответствии с заключённым договором на туристическое обслуживание (согласно п. 6 ст. 17 Закона о турист.деятельности).</p>
            </li>
            <li>
              <p>
                Получение средств согласно условиям заключённого договора на туристское обслуживание.
              </p>
            </li>
            <li>
              <p>
                В случае не согласия с представленным ответом турагентства/ туроператора предъявить письменную претензию согласно Закона о защите прав потребителей.
              </p>
            </li>
            <li>
              <p>
                В случае отказа в удовлетворении претензии либо не согласии с заявленными условиями туроператора/ турагента обратится с иском в суд согласно действующего законодательства (ГПК,ГК, Закона о защите прав потребителей, Закона о туристкой деятельности).
              </p>
            </li>
          </ol>
      </div>`,
      },
      {
        id: 1,
        text: 'По семейным или иным причинам',
        ispPrevInfo: false,
        content: `<div class="modal__text-info">
          <ol>
            <li>
              <p>
                Письменное обращение в адрес турагентства/туроператора с приложение документов причины отказа от услуг туроператора/турагентства.
              </p>
              <div class="tooltip-wrap">
                   <div class="tooltip-btn" data-tooltip-id="my-tooltip" data-tooltip-variant="info" data-tooltip-place="right-start" data-tooltip-content="Сбор письменных доказательств (справки, свидетельства, и прочие  документы), подтверждающий факт наступления невозможности вылета. Во избежание риска утраты расходов произведенные по условиям договора на туристское обслуживание, турист вправе заключить договор добровольного страхования расходов лиц, выезжающих за границу РК, в связи с отменой поездки (ст. 806 Гражд.кодекса предусмотрено также добровольное страхование). Договор добров.страхования заключается по волеизъявлению самого заявителя, и страхов.компанией. Виды, условия и порядок добров.страхования определяются соглашением сторон. Страховым случаем будет является факт возникновения в период действия договора на туристическое обслуживание убытков Застрахованного, вызванных внезапной, непредвиденной отменой запланированной, полностью оплаченной поездки за границу (смерть, болезнь близкого родственника, травмы, заболевания застрахованного или близкого родственника, повреждение или гибель имущества и пр.). Договор добровольного страхования должен быть заключен не позднее 10 календарных дней до начала запланированной поездки. Вступает в силу со дня следующего за днем оплаты стразовой премии. Страховая сумма, страховая премия определяется соглашением сторон. При наступлении страхового случая, определённое условием договора добровольного страхования, заявитель/ застрахованный вправе требовать от Страховщика осуществить страховую выплату; при отказе Страховщика совершении указанных действий оспорить их в судебном порядке.">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#D5251B"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9945 16C10.9945 15.4477 11.4422 15 11.9945 15H12.0035C12.5558 15 13.0035 15.4477 13.0035 16C13.0035 16.5523 12.5558 17 12.0035 17H11.9945C11.4422 17 10.9945 16.5523 10.9945 16Z" fill="#D5251B"/>
                    </svg>
                  </div>
              </div>
            </li>
            <li>
              <p>Рассмотрение заявления туроператором/турагентством заявленных требований в установленные законодательством сроки.</p>
            </li>
            <li>
              <p>
                Получение средств согласно условиям договора, заключенного между туроператором и турагентством.
              </p>
            </li>
            <li>
              <p>
               В случае отказа в удовлетворении претензий либо не согласии с условиями туроператора/турагента обратится в суд с иском согласно действующего законодательства.
              </p>
            </li>
          </ol>
      </div>`,
      },
      {
        id: 2,
        text: 'Банкротство туроператора',
        ispPrevInfo: false,
        content: `<div class="modal__text-info">
          <ol>
            <li>
              <p>
                Связаться с лицом с кем был заключен договор с уточнением требований. Фиксировать все действия при отказе от оказания услуг исполнителем (переписка WhatsApp, email, фискальные чеки, квитанции и пр.).
              </p>
            </li>
            <li>
              <p>Незамедлительно оформить письменную претензию/требование в адрес лица, с кем был заключен договор на туристское обслуживание с приложением всех подтверждающих документов (договор, документы об оплате, переписки, и пр.), чтобы была возможность получить деньги до начала процедуры банкротства.</p>
              <ul>
                <li>
                  В случае если процедура банкротства началась: после возбуждения процедуры банкротства на  основании определения суда, но до вынесения окончательного решения, предъявить треб ования временному управляющему, назначаемого определением суда согласно Закона о реабилитации и банкротстве.
                 </li>
                 <li>
                  В случае если состоялось решение суда о признании банкротом туроператора, предъявить требования о взыскании долга банкротному управляющему.
                 </li>
              </ul>
            </li>
            <li>
              <p>
                Получить письменное уведомление от временного/банкротного управляющего о признании требований кредитора, т.е. заявителя/туриста в полном объеме или в части. При этом кредитор вправе обжаловать принятое решение временного управляющего в судебном порядке (ст. 91 Закона о реабилитации и банкротстве).
              </p>
              <div class="tooltip-wrap">
                 <div class="tooltip-btn" data-tooltip-id="my-tooltip" data-tooltip-variant="info" data-tooltip-place="right-start" data-tooltip-content="Заявитель/кредитор вправе обжаловать принятое решение суда в вышестоящие судебные инстанции согласно установленным требованиям процессуального законодательства.">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#D5251B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9945 16C10.9945 15.4477 11.4422 15 11.9945 15H12.0035C12.5558 15 13.0035 15.4477 13.0035 16C13.0035 16.5523 12.5558 17 12.0035 17H11.9945C11.4422 17 10.9945 16.5523 10.9945 16Z" fill="#D5251B"/>
                  </svg>
                </div>
              </div>
            </li>
          </ol>
      </div>`,
      },
      {
        id: 3,
        text: 'Мошеннические действия турагента',
        ispPrevInfo: true,
        content: `<div class="modal__text-info">
          <ol>
            <li>
              <p>
                Обратится с заявлением на основании документов по приобретенному туру в правоохранительные органы по месту совершения преступления, т.е. по месту заключения договора и передачи денег согласно уголовному процессуальному кодексу (далее- УПК), а также предъявление гражданского иска в рамках возбужденного уголовного дела (ст. 166 УПК).
              </p>
            </li>
            <li>
              <p>После регистрации заявления, предоставить письменное пояснение по факту преступного деяния подозреваемого, получение постановления от следственных органов постановления о признании заявителя потерпевшим , с вытекающими всеми правами и обязанностями предусмотренные ст. 71 УПК РК</p>
            </li>
            <li>
              <p>
                Участие в процессе досудебного и судебного разрешения возбужденного уголовного дела, результатом которого является приговор суда о признании действий / бездействий турагента мошенничеством согласно ст. 190 УК и удовлетворение гражданского иска о возмещении материального ущерба, либо вынесение судом оправдательного приговора.
              </p>
            </li>
            <li>
              <p>
                Результат: приговор суда о признании действий/бездействий турагента мошенничеством согласно ст. 190 УК, и удовлетворении гражданского иска о возмещении материального ущерба, либо вынесение судом оправдательного приговора в отношении обвиняемого лица
              </p>
            </li>
          </ol>
      </div>`,
      },
      {
        id: 4,
        text: 'Отмена рейса авиакомпанией',
        ispPrevInfo: true,
        content: `<div class="modal__text-info">
          <p>
            При задержке или отмене рейсов по вине авиакомпании пассажир вправе требовать в зависимости от задержки прохладительные напитки, горячее питание.
          </p>
          <p>
            При задержке более 4 часов и далее: через каждые 6 час. – в дневное время; через каждые 8 час. – в ночное время), проживание в гостинице (при ожидании вылета рейса более 8 часов в дневное время и более 6 часов в ночное время), а также транспорт до гостиницы и обратно.
          </p>
          <p>
            Более того, согласно ст. 567 Кодекса об административное правонарушениях, перевозчик может быть привлечен к административной ответственности (санкция – штраф в размере 200МРП, при повторности совершения правонарушения – 1000 МРП).
          </p>
          <p>
            Когда гостиница предоставляется без взимания дополнительной платы, в случае просрочки доставки пассажира, перевозчик уплачивает штраф в размере 3% от стоимости тарифа (тарифа полетного участка, на котором произошла просрочка) за каждый час просрочки, согласно п. 3, п.4 ст. 86 Закон об использовании воздушного пространства.
          </p>
          <p>
            Также в случае задержки на 10 часов и более или отмене рейса по выбору пассажира оформляется перебронирование на ближайший рейс с предоставлением услуг либо полный возврат стоимости
           </p>
          <ol>
            <li>
              <p>
                Обратится с письменной претензией к авиаперевозчику , которая должна быть рассмотрена компанией в течении десяти дней, при этом компания должна предложить добровольный порядок возмещения причинённого пассажиру убытка (ст. 86 Закона об использовании воздушного пространства и деятельности авиации). 
              </p>
            </li>
            <li>
              <p>В случае отсутствия ответа в установленные сроки, пассажир в праве обратится в уполномоченный орган по защите прав потребителей по месту нахождения, либо в судебный органы с заявлением исковых требований о возмещений ущерба.</p>
            </li>
            <li>
              <p>
                Разрешения спора в судебном порядке, с вынесением соответствующего судебного акта об удовлетворении исковых требований заявителя либо мотивированный отказ в удовлетворении требований заявителя.
              </p>
            </li>
          </ol>
      </div>`,
      }
    ]
  ]

  const openModal = (ispPrevInfo, text, content) => {
    if(+inData?.id === 0 || +inData?.id === 1) {
      router.push('/search')
    } else {
      toggleModal()
      const newObj = {
        text: text,
        content: content
      }
      setData(newObj)
    }
  }

  return (
      <div className='page-blank__container'>
        <div className="container">
          <div className="page-blank">
            <HeadPage title={inData?.title}/>
            <div className="help-list__wrap">
              <ul className="help-list list-reset">
                {
                    helpVariants && helpVariants[inData?.id].map(({id, text, ispPrevInfo, content}) => {
                      return (
                          <li key={id} className='help-list__item' onClick={() => openModal(ispPrevInfo, text, content)}>
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

            <div className="consultation-blank">
              <h3 className="consultation-blank__title">
                Нужна юридическая консультация?
              </h3>
              <div className="consultation-blank__desc">
                Можете обратится к нашим юристам
              </div>
              <Link className="item-btn item-btn--primary" href="https://api.whatsapp.com/send?phone=77018880395" target='_blank' style={{justifyContent: 'center'}}><span>Связаться с Камкор</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
  )
}