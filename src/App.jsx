import "./App.css";

import Card from "./Components/Card/Index";
import Button from "./Components/Button/Index";
import ContModal from "./Components/ContModal/Index";

import { useState } from "react";

const initialCandy = {
  candy0: 0,
  candy1: 0,
  candy2: 0,
};

function App() {
  const [showModalS, setShowModalS] = useState(false);
  const [showModalS2, setShowModalS2] = useState(false);
  const [showModalM, setShowModalM] = useState(false);
  const [showModalEnd, setShowModalEnd] = useState(false);

  const [candy, setCandy] = useState(initialCandy);

  const [userName, setUserName] = useState("");

  const [randMoney, setRandMoney] = useState("");

  const candyPrice = {
    price0: 2,
    price1: 3,
    price2: 4.5,
  };

  const handleStart = () => {
    setShowModalS(!showModalS);
  };

  const handleEnd = () => {
    setShowModalEnd(!showModalEnd);
  };

  const handleReset = () => {
    setCandy(initialCandy);
  };

  const handleOnChangeCandy = (event) => {
    const name = event.target.name;
    setCandy({ ...candy, [name]: event.target.value });
  };

  const handleRandEnd = () => {
    let money = randMoney;
    let firstC = 0;
    let secC = 0;
    let thirdC = 0;

    do {
      if (money >= 4.5 && money < 5) {
        thirdC++;
        money -= candyPrice.price2;
      } else if (money >= 3 && money < 4) {
        secC++;
        money -= candyPrice.price1;
      } else {
        firstC++;
        money -= candyPrice.price0;
      }
    } while (money > 2);

    setCandy({
      candy0: firstC,
      candy1: secC,
      candy2: thirdC,
    });
  };

  let priceTotal = (
    candy.candy2 * candyPrice.price2 +
    candy.candy1 * candyPrice.price1 +
    candy.candy0 * candyPrice.price0
  ).toFixed(2);

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
        //lógica de add doce
        userName={userName}
        setUserName={setUserName}
        priceTotal={priceTotal}
        candy={candy}
        setCandy={setCandy}
        handleOnChangeCandy={handleOnChangeCandy}
        //lógica doce otimizado
        randMoney={randMoney}
        setRandMoney={setRandMoney}
        handleRandEnd={handleRandEnd}
      />
      <main className="App">
        <h1 className="titulo titulo-hover">Confissões Da Minha Dieta</h1>
        {userName !== "" ? (
          <p className="subtitulo subtitulo-hover">Bem-vindo/a, {userName}!</p>
        ) : (
          <p className="subtitulo subtitulo-hover">Seja bem-vindo!</p>
        )}
        <div className="App-buttons__container">
          <Button title="Fechar Pedido" handleClick={handleEnd} />
          <Button title="Fazer Pedido" handleClick={handleStart} />
          <Button title="Limpar" handleClick={handleReset} />
        </div>

        <p className="texto texto-hover">Preço total: R$ {priceTotal}</p>

        <div className="App-cards__container">
          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: {candy.candy0}</p>
            <p className="texto texto-hober">
              Valor: R$ {(candy.candy0 * candyPrice.price0).toFixed(2)}
            </p>
            <Card
              title="Super Troufer"
              text="Chocolate ao leite trufado com leite condesado e limão siciliano"
              price="2,00"
            />
          </div>

          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: {candy.candy1}</p>
            <p className="texto texto-hober">
              Valor: R$ {(candy.candy1 * candyPrice.price1).toFixed(2)}
            </p>

            <Card
              title="Amor Proibido"
              text="Doce de leite com recheio de maracujá com sementes cristalizadas de maracujá"
              price="3,00"
            />
          </div>

          <div className="individual-cards__container">
            <p className="texto texto-hober">Quantidade: {candy.candy2}</p>
            <p className="texto texto-hober">
              Valor: R$ {(candy.candy2 * candyPrice.price2).toFixed(2)}
            </p>
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
