import "../Styles.css";

import { useRef } from "react";

const ModalSingle = ({
  title,
  name,
  text,
  inputNeed,
  type,
  text2,
  btnValue1,
  btn2Need,
  btnValue2,
  btnName1,
  btnName2,
  userName,
  setUserName,
  modalRef,
  show,
  setShow,
  setShowModal1,
  setShowModal2,
  finalModal,
  setCandy,
  isRandom,
  randMoney,
  setRandMoney,
  handleRandEnd,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal__container" ref={modalRef}>
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="subtitulo subtitulo-hover">{title}</h3>
        </div>
        <div className="modal__body">
          <label htmlFor={name} className="texto texto-hover">
            {text}
          </label>
          {inputNeed && (
            <input
              type={type}
              name={name}
              className="texto input__geral"
              value={isRandom ? randMoney || "" : userName || ""}
              onChange={(event) =>
                isRandom
                  ? setRandMoney(event.target.value)
                  : setUserName(event.target.value)
              }
            />
          )}
          <p className="texto">{text2}</p>
        </div>
        <div className="modal__footer">
          <input
            type="button"
            value={btnValue1}
            name={btnName1}
            className={
              userName !== "" ? "texto btn__geral" : "texto btn__inactive"
            }
            onClick={() => {
              if (userName !== "") {
                setShow(!show);
                if (finalModal) {
                  setUserName("");
                  setCandy({
                    candy0: 0,
                    candy1: 0,
                    candy2: 0,
                  });
                }
                if (name === "userName") {
                  setShowModal1(true);
                }
              }
            }}
          />
          {btn2Need && (
            <input
              type="button"
              value={btnValue2}
              name={btnName2}
              className={
                userName !== "" ? "texto btn__geral" : "texto btn__inactive"
              }
              onClick={() => {
                if (userName !== "") {
                  if (isRandom) {
                    setCandy({
                      candy0: Math.floor(randMoney / 2),
                      candy1: 0,
                      candy2: 0,
                    });
                  }
                  setShow(!show);
                  if (name === "userName") {
                    setShowModal2(true);
                  }
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSingle;
