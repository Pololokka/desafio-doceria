import "./Styles.css";

import ModalSingle from "./ModalSingle/Index";
import ModalMulti from "./ModalMulti/Index";

import { useEffect, useState, useRef } from "react";

const ContModal = ({
  showModalS,
  setShowModalS,
  showModalS2,
  setShowModalS2,
  showModalM,
  setShowModalM,
  showModalEnd,
  setShowModalEnd,
  userName,
  setUserName,
  priceTotal,
  candy,
  setCandy,
  handleOnChangeCandy,
  randMoney,
  setRandMoney,
  handleRandEnd,
}) => {
  const [currStep, setCurrStep] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    if (showModalS) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModalS]);

  const handleClickOutside = (event) => {
    if (event.target === modalRef.current) {
      setShowModalS(false);
    }
  };

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
        btnValue1="Otimizar"
        btnValue2="Escolher"
        btn2Need={true}
        userName={userName}
        setUserName={setUserName}
        modalRef={modalRef}
        show={showModalS}
        setShow={setShowModalS}
        showModal1={showModalS2}
        setShowModal1={setShowModalS2}
        showModal2={showModalM}
        setShowModal2={setShowModalM}
      />

      <ModalSingle
        title="Escolha Otimizada"
        name="random"
        text="Insira quanto dinheiro gostaria de gastar, e a máquina vai escolher seus doces!"
        inputNeed={true}
        type="number"
        btnValue1="Fechar"
        btnValue2="Concluir"
        btn2Need={true}
        show={showModalS2}
        setShow={setShowModalS2}
        setCandy={setCandy}
        isRandom={true}
        randMoney={randMoney}
        setRandMoney={setRandMoney}
        handleRandEnd={handleRandEnd}
      />

      <ModalMulti
        show={showModalM}
        type="number"
        name="candy"
        setShow={setShowModalM}
        step={step}
        currStep={currStep}
        setCurrStep={setCurrStep}
        candy={candy}
        handleOnChangeCandy={handleOnChangeCandy}
      />

      <ModalSingle
        title={"Pedido concluído, " + userName + "!"}
        text2={
          "Seu total foi de R$" +
          priceTotal +
          ". Agora é só aguardar que já já te chamamos pelo nome!"
        }
        btnValue1="fechar"
        inputNeed={false}
        btn2Need={false}
        setUserName={setUserName}
        show={showModalEnd}
        setShow={setShowModalEnd}
        finalModal={true}
        setCandy={setCandy}
      />
    </>
  );
};

export default ContModal;
