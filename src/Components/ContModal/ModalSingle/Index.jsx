import "../Styles.css";

const ModalSingle = ({
  title,
  name,
  text,
  btnValue1,
  btnValue2,
  show,
  setShow,
  showModal1,
  setShowModal1,
  showModal2,
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
          <input type="text" name={name} className="texto input__geral" />
        </div>
        <div className="modal__footer">
          <input
            type="button"
            value={btnValue1}
            className="texto btn__geral"
            onClick={() => {
              setShow(!show);
              if (name === "userName") {
                setShowModal1(true);
              }
            }}
          />
          <input
            type="button"
            value={btnValue2}
            className="texto btn__geral"
            onClick={() => {
              setShow(!show);
              if (name === "userName") {
                setShowModal2(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSingle;
