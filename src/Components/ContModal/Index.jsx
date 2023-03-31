import "./Styles.css";

import ModalSingle from "./ModalSingle/Index";
import ModalMulti from "./MidalMulti/Index";

import { useState } from "react";

const ContModal = () => {
  const [showModalS, setShowModalS] = useState(false);
  const [showModalM, setShowModalM] = useState(false);

  return (
    <>
      <input
        type="button"
        value="mostrar modal single"
        onClick={() => setShowModalS(!showModalS)}
      />

      <input
        type="button"
        value="mostrar modal multi"
        onClick={() => setShowModalM(!showModalM)}
      />
      <ModalSingle
        title="teste modal single"
        text="texto teste modal single"
        btnValue="botão de teste"
        show={showModalS}
        setShow={setShowModalS}
      />
      <ModalMulti show={showModalM} setShow={setShowModalM} />
    </>
  );
};

export default ContModal;
