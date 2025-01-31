import {colorPickerOptions} from './ColorPikerData'

export const ColorPiker = (props)=>{
    return <ul>
        {props.colors.map((piker)=>{
           return <li>
                <h1>{piker.label}</h1>
                <div style={{backgroundColor: piker.color, width: '50px',height: '50px'}}></div>
            </li>
        })}
    </ul>
}