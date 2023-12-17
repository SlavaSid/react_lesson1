import './Contacts.css'

export const Contacts = (props) => {
    return (
        <div className="contacts">
            <p className="address">Адрес: {props.address}</p>            
            <p className="contacts-tel">Телефон: {props.tel}</p>
        </div>
    )
}