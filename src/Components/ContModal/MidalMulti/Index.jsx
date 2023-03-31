import "../Styles.css";

import { useState } from "react";

const ModalMulti = ({ show, setShow }) => {
  if (!show) {
    return null;
  }

  const step = [
    {
      titleTest: "teste obj 1",
      textTest: "texto teste obj 1",
    },
    {
      titleTest: "teste obj 2",
      textTest: "texto teste obj 2",
    },
    {
      titleTest: "teste obj 3",
      textTest: "texto teste obj 3",
    },
  ];

  const [currStep, setCurrStep] = useState(0);

  const multiStep = true;
  const element = step?.find((el, i) => i === currStep);

  if (multiStep) {
    if (element) {
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
                value={currStep === 0 ? "Fechar" : "Voltar"}
                className="texto btn__geral"
                onClick={() => {
                  setCurrStep(currStep - 1);
                  if (currStep === 0) {
                    setShow(!show);
                  }
                }}
              />
              <input
                type="button"
                value={currStep + 1 === step.length ? "Concluir" : "Avançar"}
                className="texto btn__geral"
                onClick={() => {
                  setCurrStep(currStep + 1);
                  if (currStep + 1 === step.length) {
                    setShow(!show);
                  }
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ModalMulti;
