import { Component } from 'react';

export class Form extends Component {
    state = {
        email: '',
        name: ''
    }
    handleSubmit = e => {e.preventDefault()
                this.setState({email: e.currentTarget.elements.email.value,
                       name: e.currentTarget.elements.name.value
        })
    }
    handleChange = e => {
        this.setState({email: e.target.value});
    }
  render() {
    return (
      <form action=""
      onSubmit={this.handleSubmit}>
        <h1>Вітаю</h1>
        <input name='email' value={this.state.email} type="email" placeholder="Напишіть свій email" 
        onChange={this.handleChange}
        />
        <input name='name' type="text" />
        <button type="submit"
        >Надіслати</button>
      </form>
    );
  }
}
