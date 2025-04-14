import { Component } from 'react';

export class Pokemon extends Component {
  state = {
    pokemonInfo: '',
  };

//   async componentDidMount() {
//     const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
//     const pokemonJson = await pokemon.json();
//     this.setState({ pokemonInfo: pokemonJson });
//   }

  async componentDidUpdate(prevProps){
    if(prevProps.name !== this.props.name){
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`);
    const pokemonJson = await pokemon.json();
    this.setState({ pokemonInfo: pokemonJson });
    }
  }

  render() {
    return (
      <>
        {this.state.pokemonInfo ? (
          <div>
            <h2>{this.state.pokemonInfo.name}</h2>
            <img
              src={
                this.state.pokemonInfo.sprites.other['official-artwork'].front_default
              }
              alt="pokemon"
            />
          </div>
        ) : (
          <div>
            <p>Упс! помилка</p>
          </div>
        )}
      </>
    );
  }
}
