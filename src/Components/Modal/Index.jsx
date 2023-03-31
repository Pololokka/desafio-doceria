import "./Styles.css";
import { useState } from "react";

const Modal = ({ title, text, btnValue, show, setShow }) => {
  if (!show) {
    return null;
  }

  const step = [
    {
      titleTest: "teste obj 1",
      textTest: "texto teste obj 1",
      btnValueTest: "botão teste obj 1",
    },
    {
      titleTest: "teste obj 2",
      textTest: "texto teste obj 2",
      btnValueTest: "botão teste obj 2",
    },
    {
      titleTest: "teste obj 3",
      textTest: "texto teste obj 3",
      btnValueTest: "botão teste obj 3",
    },
  ];

  const [currStep, setCurrStep] = useState(0);

  let count = currStep;
  const multiStep = true;
  const element = step?.find((el, i) => i === currStep);

  if (element && multiStep) {
    return (
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__header">
            <h3 className="subtitulo subtitulo-hover">{element.titleTest}</h3>
          </div>
          <div className="modal__body">
            <p className="texto">{element.textTest}</p>
          </div>
          <div className="modal__footer">
            <input
              type="button"
              value={element.btnValueTest}
              className="texto btn__geral"
              onClick={() => {
                console.log(element);

                setCurrStep(count++);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // <div className="modal__container">
  //   <div className="modal__content">
  //     <div className="modal__header">
  //       <h3 className="subtitulo subtitulo-hover">{title}</h3>
  //     </div>
  //     <div className="modal__body">
  //       <p className="texto">{text}</p>
  //     </div>
  //     <div className="modal__footer">
  //       <input
  //         type="button"
  //         value={btnValue}
  //         className="texto btn__geral"
  //         onClick={() => setShow(!show)}
  //       />
  //     </div>
  //   </div>
  // </div>
};

export default Modal;
