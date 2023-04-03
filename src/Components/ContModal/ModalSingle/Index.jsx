import "../Styles.css";

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
  show,
  setShow,
  setShowModal1,
  setShowModal2,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="subtitulo subtitulo-hover">{title}</h3>
        </div>
        <div className="modal__body">
          <label htmlFor={name} className="texto texto-hover">
            {text}
          </label>
          {inputNeed && (
            <input type={type} name={name} className="texto input__geral" />
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
