import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Pokemon.module.css';

export class Pokemon extends Component {
  state = {
    pokemonInfo: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({ pokemonInfo: null, isLoading: true });
      if (!this.props.name.trim()) {
        toast.warn("Будь ласка, введіть ім'я покемона!");
        this.setState({ isLoading: false });
        return;
      }
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.props.name.toLowerCase()}`
        );
        if (!pokemon.ok) {
          throw new Error(
            `Не вдалося отримати інформацію про покемона "${this.props.name}". Перевірте правильність написання.`
          );
        }
        const pokemonJson = await pokemon.json();
        this.setState({ pokemonInfo: pokemonJson, isLoading: false });
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
        toast.error(`Упс! Сталася помилка: ${error.message}`);
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <>
        {this.props.name ? null : <p>Введіть ім'я покемона</p>}
        {this.state.isLoading && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            secondaryColor="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            visible={true}
          />
        )}
        {this.state.pokemonInfo && !this.state.isLoading ? (
          <div className={s.div}>
            <h2 className={s.divtext}>{this.state.pokemonInfo.name}</h2>
            <img
              src={
                this.state.pokemonInfo.sprites.other['official-artwork']
                  .front_default
              }
              alt={this.state.pokemonInfo.name}
            />
          </div>
        ) : (
          this.props.name &&
          !this.state.isLoading &&
          !this.state.pokemonInfo && (
            <p className={s.error}>
              Не знайдено покемона з ім'ям "{this.props.name}".
            </p>
          )
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

// 1 - показати текст "Введіть ім'я покемона" використати тернарник
// frontend-mentor frontend-mentor
// 19:38
// 2 - після сабміту форми показати лоадер (створюємо властивість в стейті і зберігаємо стан лоадера)
// 3 - показати нотифікації при сабміті пустої форми або якщо такого покемона немає
// 4 - обробка помилки
