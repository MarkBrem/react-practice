import { useContext } from "react"
import { Context } from "./App"

export const Message = ()=>{
const abc = useContext(Context)
    return <>{abc.show && <p>Message</p>}</>
}