import "../Styles.css";

const ModalMulti = ({
  show,
  name,
  type,
  setShow,
  step,
  currStep,
  setCurrStep,
  candy,
  handleOnChangeCandy,
}) => {
  if (!show) {
    return null;
  }

  const element = step?.find((el, i) => i === currStep);

  if (element) {
    return (
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__header">
            <h3 className="subtitulo subtitulo-hover">{element.titleTest}</h3>
          </div>
          <div className="modal__body">
            <label htmlFor={name + element.id} className="texto">
              {element.textTest}
            </label>
            <input
              type={type}
              name={name + element.id}
              className="texto input__geral"
              value={candy[name + element.id] || ""}
              min={0}
              onChange={handleOnChangeCandy}
            />
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
                  setCurrStep(0);
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
                  setCurrStep(0);
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ModalMulti;
