import "./App.css";

import Card from "./Components/Card/Index";
import Button from "./Components/Button/Index";
import Modal from "./Components/Modal/Index";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <input
        type="button"
        value="mostrar modal"
        onClick={() => setShowModal(!showModal)}
      />
      <Modal
        title="modal teste"
        text="qualquer coisa aqui"
        btnValue="Fechar"
        show={showModal}
        setShow={setShowModal}
      />
      <main className="App">
        <h1 className="titulo titulo-hover">Confissões Da Minha Dieta</h1>
        <div className="App-buttons__container">
          <Button title="Fechar Pedido" />
          <Button title="Fazer Pedido" />
          <Button title="Limpar" />
        </div>
        <div className="App-cards__container">
          <Card
            title="Super Troufer"
            text="Doce chocolate trufado com leite condesado e limão siciliano"
            price="2,00"
          />
          <Card
            title="Amor Proibido"
            text="Doce de leite com recheio de maracujá com sementes cristalizadas de maracujá"
            price="3,00"
          />
          <Card
            title="Rainha dos Doces"
            text="Bolacha com paleta italiana de (morango, limão ou laranja) e mel"
            price="4,50"
          />
        </div>
      </main>
    </>
  );
}

export default App;
