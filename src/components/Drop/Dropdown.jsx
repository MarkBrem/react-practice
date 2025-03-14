import { Component } from "react"
import './Dropdown.css'

export class Dropdown extends Component{
    state = {
        show: false
    }
    HandleClick = e => {
        this.setState((prevState)=>{
            return{
                show: !prevState.show
            }
        });
    }

    

    render(){
        return <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.HandleClick}
        >
          {this.state.show ? 'Close': 'Open'}
        </button>
        { this.state.show && <div className="Dropdown__menu">Випадаюче меню</div>}
       </div>
    }
}

