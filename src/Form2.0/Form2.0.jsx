import { Component } from 'react';
import s from './Form2.module.css';

export class Form2 extends Component {
  state = {
    email: '',
    name: '',
    tel: '',
    expirience: 'junior',
    agree: false
  };
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleChecked = e =>{
    this.setState((prevState)=>({agree : !prevState}));
  }
  render() {
return (
      <form
        autoComplete="off"
        validate
        className={s.form}
        action=""
      >
        <label htmlFor="">Ваше ім'я</label>
        <input
          onChange={this.handleChange}
          className={s.input}
          type="text"
          name="name"
          id=""
          value={this.state.name}
        />
        <label htmlFor="">Ваш Email</label>
        <input
          onChange={this.handleChange}
          className={s.input}
          type="email"
          name="email"
          id=""
          value={this.state.email}
        />
        <label htmlFor="">Ваш номер телефону</label>
        <input
          onChange={this.handleChange}
          className={s.input}
          type="tel"
          name="tel"
          id=""
          value={this.state.tel}
        />
        <p>ваш рівень</p>
        <label htmlFor="">
          Junior
          <input onChange={this.handleChange} checked={"junior" === this.state.expirience} type="radio" name="expirience"  value='junior'/>
        </label>
        <label htmlFor="">
          Middle
          <input onChange={this.handleChange} checked={"middle" === this.state.expirience} type="radio" name="expirience"  value='middle'/>
        </label>
        <label htmlFor="">
        Senior
          <input onChange={this.handleChange}  checked={"senior" === this.state.expirience} type="radio" name="expirience"  value='senior'/>
        </label>
        <label htmlFor="">
          Погоджуюся з умовами
          <input type="checkbox" name="agree" id="" checked={this.state.agree}
        onChange={this.handleChecked} />
        </label>
        <button className={s.button} type="Submit">
          Відправити
        </button>
      </form>
    );
  };
}
