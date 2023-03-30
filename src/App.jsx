import "./App.css";

import Card from "./Components/Card/Index";

function App() {
  return (
    <>
      <main className="App">
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
      </main>
    </>
  );
}

export default App;
