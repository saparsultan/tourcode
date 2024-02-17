import React, {useEffect, useRef} from 'react';
import {useHelpInfoModal} from "@/store/zustand";
import parse from 'html-react-parser';
import { Tooltip } from 'react-tooltip'

export default function HelpInfo() {
  const {data, toggleModal} = useHelpInfoModal()
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log("data", {data})
  return (
      <div className='modal__overlay'>
        <div className="modal-wrap">
          <div className="modal" ref={modalRef} style={{backgroundColor: '#f1f8fb'}}>
            <Tooltip id="my-tooltip" style={{maxWidth: '100%', width: '100%'}} />
            <div className="modal-content">
              <h3 className="modal__title">
                {
                  data.text
                }
              </h3>
              <div>
                {parse(data.content)}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}