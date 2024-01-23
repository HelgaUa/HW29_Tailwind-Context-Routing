import { useContext } from "react";
import ThemeContext from "../helpers/context.js";

function Contacts() {
    const [color] = useContext(ThemeContext);
    return (
        <div id='contacts' className='p-7 flex-grow' style={{backgroundColor: color.bgColor, color: color.textColor}}>
            <h2 className='text-lg uppercase font-bold mb-4 border-b-2' >Contacts</h2>
            <ul>
                <li className='mb-5'>
                    <span className="icon-mail2 inline-block mr-3"></span>
                    <a className='hover:underline' href="mailto:elgaua@gmail.com">E-mail</a>
                </li>
                <li className='mb-5'>
                    <span className="icon-mobile mr-3"></span>
                    <a className='hover:underline' href="tel:+380668753379">Phone</a>
                </li>
                <li className='mb-5'>
                    <span className="icon-instagram mr-3"></span>
                    <a className='hover:underline' href="https://www.instagram.com/olya_go__/">Instagram</a></li>
                <li className='mb-5'>
                    <span className="icon-location2 mr-3"></span>
                    <span className='hover:underline'>Ukraine, Poltava</span>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;