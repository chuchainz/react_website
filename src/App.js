import "./App.css";
import React from "react";

const App = () => {
  const [pokeData, setPokeData] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((json) => {
        setPokeData(json.results);
        setIsDataLoaded(true);
      })
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1>Please wait 50 more hours :D</h1>
      </div>
    );
  }

return (
  <div className="base">
    <h1>Kanto Region Pokémon</h1>
    <div className="insideCard">
      {pokeData.map((pokemon) => {
        const urlSplit = pokemon.url.split('/');
        const pokeNum = urlSplit[urlSplit.length - 2];
        return (
          <div className="card">
            <h2>#{pokeNum}</h2>
            {/* https://stackoverflow.com/questions/69239521/unable-to-display-pokemon-image-from-pokeapi-co */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </div>
        )
      })}
    </div>
  </div>
);

}

export default App;
