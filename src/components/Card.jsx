import data from '../data.json'
export const Card = ()=>{
    return <ul>
      {data.map((paintCard) => {
        return <li key={paintCard.id}>
    <img src={paintCard.url} alt="..." width="480"/>
    <h2 style={{color: 'tomato'}}>{paintCard.title }</h2>
    <p>
        Автор: <a href={paintCard.author.url}>{ paintCard.author.tag}</a>
    </p>
    <p>Ціна:{paintCard.price} грн</p>
    <p>Наявність:{! paintCard.quantity < 5 ?'Товар закінчується' : paintCard.quantity}  </p>
    <button type="button">Додати в кошик</button>
    </li>
    })}
    </ul>} 