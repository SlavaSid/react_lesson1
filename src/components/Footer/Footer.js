import './Footer.css';
import { Contacts } from '../Contacts/Contacts';
import { Company } from '../Information/Company';

export const Footer = () => {
    return (
        <footer>
        <Company text="ООО «Строительная компания «Восток», УНП 791217490,ЗАО «МБанк» ул. Толстого, 10, Минск, БИК MTBKBY22."/>
        <Contacts address="РБ, г. Могилев, ул. Челюскинцев, 43 офис 26" tel="+375 29 528 11 11"/>
      </footer>
    )}
