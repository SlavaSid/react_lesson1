import './Card.css';

export const Card = (props) => {
    return (
        <div className="wrapper">
            <h1 className="wrapper-h1">{props.title}</h1>
            <p className="wrapper-p">{props.text}</p>
            <button className="wrapper-button">Подробнее</button>
        </div>
    )
}