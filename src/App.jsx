import { Books } from "components/Books"
import { Greeting } from "components/Greeting"
import { PaintingList } from "components/PaintingList"
import data from '../src/data.json'
import { Message } from "components/Message"

export const App = ()=>{
    return <>
    <Message message = 'Це виконане завдання' />
    {/* <PaintingList data = {data} />
    <Greeting name = 'Marko'/> */}
    </>
}