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
      id: 0,
      titleTest: "Super Troufer - R$ 2,00",
      textTest: "Esolha quantos doces quer pedir!",
    },
    {
      id: 1,
      titleTest: "Amor Proibido - R$ 3,00",
      textTest: "Esolha quantos doces quer pedir!",
    },
    {
      id: 2,
      titleTest: "Rainha dos Doces - R$ 4,50",
      textTest: "Esolha quantos doces quer pedir!",
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
        title="Vamos começar seu pedido!"
        name="userName"
        text="Insira o seu nome: "
        type="text"
        text2='E como gostaria de fazer seu pedido? Caso queira selecionar os doces, aperte em "Escolher"; caso queira uma seleção otimizada para a maior quantidade de doces, aperte em "Randomizar"!'
        btnValue1="Randomizar"
        btnValue2="Escolher"
        show={showModalS}
        setShow={setShowModalS}
        showModal1={showModalS2}
        setShowModal1={setShowModalS2}
        showModal2={showModalM}
        setShowModal2={setShowModalM}
      />

      <ModalSingle
        title="Escolha Randomizada"
        name="random"
        text="Insira quanto dinheiro gostaria de gastar, e a máquina vai escolher seus doces!"
        type="number"
        btnValue1="Fechar"
        btnValue2="Concluir"
        show={showModalS2}
        setShow={setShowModalS2}
      />

      <ModalMulti
        show={showModalM}
        type="number"
        name="candy"
        setShow={setShowModalM}
        step={step}
        currStep={currStep}
        setCurrStep={setCurrStep}
      />
    </>
  );
};

export default ContModal;
