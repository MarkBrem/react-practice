import { Component } from 'react';

export class PForm extends Component {
  state = {
    pokemonName: '',
  };

  onHandleChange = (e)=>{
    this.setState({
        pokemonName: e.currentTarget.value
    })
  }

  handleName = (e)=>{
    e.preventDefault()
    this.props.onName(this.state.pokemonName)
  }

  render(){
    return <form onSubmit={this.handleName} action="">
    <input
      value={this.state.pokemonName}
      onChange={this.onHandleChange}
      type="text"/>
    <button type="submit">Надіслати</button>
  </form>;
  }
}
