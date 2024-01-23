import Img from '../images/photo.jpg';
import { Button } from "./Button.jsx";
import ThemeContext from "../helpers/context.js";
import { useContext } from "react";
import { NavLink } from "react-router-dom";


function Header() {

    const [color, setColor] = useContext(ThemeContext);

    const onButtonDarkLightClick = () => {
        setColor({
            textColor: color.textColor === 'white' ? '#313c4d' : 'white',
            bgColor: color.bgColor === 'white' ? '#313c4d' : 'white'
        });
    }

    return (
        <header id='header' className='flex justify-content-center justify-between align-items-center text-white p-7 '>
            <div className='text-base'>
                <img className='inline-block max-h-52 max-w-52 min-h-28 min-w-28 rounded-full m-2' src={Img} alt='photo'/>
                <div className='inline-block px-5'>
                    <h1 className='inline-block text-2xl font-bold uppercase'>Olha Hozha</h1>
                    <p>Front-end developer</p>
                </div>
            </div>
            <ul className='flex items-start gap-3'>
                <li><NavLink className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
                             to='/home'>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
                             to='/about'>About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
                             to='/todo'>ToDo</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'underline' : 'hover:underline'}
                             to='/contacts'>Contacts</NavLink></li>
                <Button className="btn-secondary bg-white hover:opacity-75 text-[#313c4d] rounded-lg px-2 mb-4"
                        onClick={onButtonDarkLightClick}>Dark/Light</Button>
            </ul>
        </header>
    )
}

export default Header;
