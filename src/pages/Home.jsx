import { useContext } from "react";
import ThemeContext from "../helpers/context.js";

function Home() {
    const [color] = useContext(ThemeContext);

    return (
        <div className='skills flex justify-items-start flex-wrap p-7 flex-grow' style={{backgroundColor: color.bgColor, color: color.textColor}}>
            <div className="techSkills">
                <h2 className='mb-5 mr-32 text-lg uppercase font-bold border-b-2'>Tech skills</h2>
                <ul>
                    <li className='mb-4'>HTML/CSS</li>
                    <li className='mb-4'>Java Script</li>
                    <li className='mb-4'>React</li>
                    <li className='mb-4'>Webpack</li>
                    <li className='mb-4'>Git</li>
                    <li className='mb-4'>jQuery</li>
                    <li className='mb-4'>Bootstrap</li>
                    <li className='mb-4'>Tailwindcss</li>
                </ul>
            </div>
            <div className='softSkills'>
                <h2 className='mb-5 text-lg uppercase font-bold border-b-2'>Soft skills</h2>
                <ul>
                    <li className='mb-4'>Self-disciplined</li>
                    <li className='mb-4'>Work for results</li>
                    <li className='mb-4'>Teamwork</li>
                    <li className='mb-4'>Time management</li>
                    <li className='mb-4'>Attention to details</li>
                    <li className='mb-4'>Perseverance</li>
                    <li className='mb-4'>Patience</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;
