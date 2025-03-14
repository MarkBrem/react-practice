import { Component } from 'react'
export class ColorPiker extends Component{

    render(){
        return <ul>
        {this.props.colors.map((piker)=>{
           return <li>
                <h1>{piker.label}</h1>
                <div onClick={()=>{this.props.choose(piker.label)}} style={{backgroundColor: piker.color, width: '50px',height: '50px'}}></div>
            </li>
        })}
    </ul>
    }
    
}