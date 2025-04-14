// import { Books } from "components/Books"
// import { Greeting } from "components/Greeting"
// import { PaintingList } from "./components/painting/PaintingList"
// import data from '../src/data.json'
// import { Message } from "components/Message"
import { ColorPiker } from 'components/ColorPiker/ColorPiker';
import { colorPickerOptions } from './components/ColorPiker/ColorPikerData';
import { Alert } from 'components/Alert/Alert';
import { Counter } from 'components/Counter/Counter';
import { Header } from 'components/Header/Header';
import { GlobalStyle } from 'Globalstyled';
import { Form } from './components/Form/Form';
import { Dropdown } from 'components/Drop/Dropdown';
import { Label } from 'components/ColorPiker/Label';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Form2 } from 'Form2.0/Form2.0';
import { PForm } from 'components/Pokemon/PForm';
import { Pokemon } from 'components/Pokemon/PokemonInfo';

export class App extends Component{
  state = {
    label: '',
    pokemonName: '',
  };


  onName = (name)=>{
    this.setState({pokemonName: name})
  }


  // ChooseLabel = (currentLabel) => {
  //   this.setState({label: currentLabel})
  // };

  render() {
    return (
      <>
       <PForm 
       onName= {this.onName}/>
       <Pokemon 
       name = {this.state.pokemonName}/>
       {/* <Form2/> */}
        {/* <Label label={this.state.label} />
        <ColorPiker 
        choose = {this.ChooseLabel}
        colors={colorPickerOptions} /> */}
        {/* <Dropdown/> */}
        {/* <Form/> */}
        {/* <Header/>
    <Counter/> */}
        {/* <GlobalStyle/>
    <Alert 
    text= 'Успіх'
    type= 'success'
    />
    <Alert 
    text= 'Помилка'
    type= 'error'
    />
    <Alert 
    text= 'Попередження'
    type= 'warning'
    /> */}
        {/* <Message message = 'Це виконане завдання' />  */}
        {/* <PaintingList data = {data} /> */}
        {/* <Greeting name = 'Marko'/> */}
        
      </>
    );
  }
}
