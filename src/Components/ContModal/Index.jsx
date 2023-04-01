import "./Styles.css";

import ModalSingle from "./ModalSingle/Index";
import ModalMulti from "./ModalMulti/Index";

import { useState } from "react";

const ContModal = () => {
  const [showModalS, setShowModalS] = useState(false);
  const [showModalS2, setShowModalS2] = useState(false);
  const [showModalM, setShowModalM] = useState(false);

  const [currStep, setCurrStep] = useState(0);

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

  return (
    <>
      <input
        type="button"
        value="mostrar modal single"
        onClick={() => setShowModalS(!showModalS)}
      />

      <input
        type="button"
        value="mostrar modal single 2"
        onClick={() => setShowModalS2(!showModalS2)}
      />

      <input
        type="button"
        value="mostrar modal multi"
        onClick={() => setShowModalM(!showModalM)}
      />

      <ModalSingle
        title="teste modal single"
        name="userName"
        text="texto teste modal single"
        btnValue1="modal single"
        btnValue2="modal multi"
        show={showModalS}
        setShow={setShowModalS}
        showModal1={showModalS2}
        setShowModal1={setShowModalS2}
        showModal2={showModalM}
        setShowModal2={setShowModalM}
      />

      <ModalSingle
        title="teste modal single 2"
        name="random"
        text="texto teste modal single 2"
        btnValue1="fechar"
        btnValue2="test"
        show={showModalS2}
        setShow={setShowModalS2}
      />

      <ModalMulti
        show={showModalM}
        setShow={setShowModalM}
        step={step}
        currStep={currStep}
        setCurrStep={setCurrStep}
      />
    </>
  );
};

export default ContModal;
