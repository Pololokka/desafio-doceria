import "../Styles.css";

const ModalSingle = ({ title, text, btnValue, show, setShow }) => {
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
          <p className="texto">{text}</p>
        </div>
        <div className="modal__footer">
          <input
            type="button"
            value={btnValue}
            className="texto btn__geral"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSingle;
