import "./App.css";

import Card from "./Components/Card/Index";
import Button from "./Components/Button/Index";
import ContModal from "./Components/ContModal/Index";

import { useState } from "react";

function App() {
  const [showModalS, setShowModalS] = useState(false);
  const [showModalS2, setShowModalS2] = useState(false);
  const [showModalM, setShowModalM] = useState(false);
  const [showModalEnd, setShowModalEnd] = useState(false);

  const handleStart = () => {
    setShowModalS(!showModalS);
  };

  const handleEnd = () => {
    setShowModalEnd(!showModalEnd);
  };

  return (
    <>
      <ContModal
        showModalS={showModalS}
        setShowModalS={setShowModalS}
        showModalS2={showModalS2}
        setShowModalS2={setShowModalS2}
        showModalM={showModalM}
        setShowModalM={setShowModalM}
        showModalEnd={showModalEnd}
        setShowModalEnd={setShowModalEnd}
      />
      <main className="App">
        <h1 className="titulo titulo-hover">Confissões Da Minha Dieta</h1>
        <div className="App-buttons__container">
          <Button title="Fechar Pedido" handleClick={handleEnd} />
          <Button title="Fazer Pedido" handleClick={handleStart} />
          <Button title="Limpar" />
        </div>
        <div className="App-cards__container">
          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: 1</p>
            <p className="texto texto-hober">Valor: R$ 1,00</p>
            <Card
              title="Super Troufer"
              text="Doce chocolate trufado com leite condesado e limão siciliano"
              price="2,00"
            />
          </div>

          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: 1</p>
            <p className="texto texto-hober">Valor: R$ 1,00</p>

            <Card
              title="Amor Proibido"
              text="Doce de leite com recheio de maracujá com sementes cristalizadas de maracujá"
              price="3,00"
            />
          </div>

          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: 1</p>
            <p className="texto texto-hober">Valor: R$ 1,00</p>
            <Card
              title="Rainha dos Doces"
              text="Bolacha com paleta italiana de (morango, limão ou laranja) e mel"
              price="4,50"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
