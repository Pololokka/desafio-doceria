import "./Styles.css";

import ModalSingle from "./ModalSingle/Index";
import ModalMulti from "./ModalMulti/Index";

import { useState } from "react";

const ContModal = ({
  showModalS,
  setShowModalS,
  showModalS2,
  setShowModalS2,
  showModalM,
  setShowModalM,
  showModalEnd,
  setShowModalEnd,
}) => {
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
      <ModalSingle
        title="Vamos começar seu pedido!"
        name="userName"
        text="Insira o seu nome: "
        inputNeed={true}
        type="text"
        text2='E como gostaria de fazer seu pedido? Caso queira selecionar os doces, aperte em "Escolher"; caso queira uma seleção otimizada para a maior quantidade de doces, aperte em "Randomizar"!'
        btnValue1="Randomizar"
        btnValue2="Escolher"
        btn2Need={true}
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
        inputNeed={true}
        type="number"
        btnValue1="Fechar"
        btnValue2="Concluir"
        btn2Need={true}
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

      <ModalSingle
        title="teste fechar"
        text2="p do teste fechar"
        btnValue1="fechar"
        inputNeed={false}
        btn2Need={false}
        show={showModalEnd}
        setShow={setShowModalEnd}
      />
    </>
  );
};

export default ContModal;
