// import { Books } from "components/Books"
// import { Greeting } from "components/Greeting"
// import { PaintingList } from "./components/painting/PaintingList"
// import data from '../src/data.json'
// import { Message } from "components/Message"
// import { ColorPiker } from "components/ColorPiker/ColorPiker"
// import {colorPickerOptions} from './components/ColorPiker/ColorPikerData'
import { Alert } from "components/Alert/Alert"


export const App = ()=>{
    return <>
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
    />
    {/* <ColorPiker colors = {colorPickerOptions}/> */}
    {/* <Message message = 'Це виконане завдання' />  */}
    {/* <PaintingList data = {data} /> */}
    {/* <Greeting name = 'Marko'/> */}
    </>
}