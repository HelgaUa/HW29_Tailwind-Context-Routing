import ToDo from "./ToDo.jsx";
import {useContext} from "react";
import ThemeContext from "../helpers/context.js";

function Main() {
    const [color] = useContext(ThemeContext);

    return (
        <main id='main' className="p-7 grow-1 text-[#313c4d]" style={{backgroundColor: color.bgColor, color: color.textColor}}>
            <div className='flex justify-content-center justify-between align-items-center'>
                <div className='summary w-2/3 pr-4'>
                    <h2 className='text-lg uppercase font-bold mb-4 border-b-2'>Summary</h2>


                    <p>Dear company, I want to become a part of your Front-end team because I have a clear goal
                        to change my profession.<br /> Lately, I worked as a teacher of Ukrainian language and literature.
                        My tasks were to organize productive work in the classroom, effective time management, and
                        work for results (children became winners of competitions, I received awards from the Department
                        of Education). This experience helped me develop my responsibility skills, self-discipline,
                        perseverance, patience, and teamwork skills.<br />In addition, I have already successfully completed
                        the basic Front-end course of the Hillel School. My result was one of the best, so I got a
                        discount for the Front-end Pro course. This month I will finish it as well. <br />Now I need more
                        practical experience to grow up, so joying your team will be a great opportunity on the way
                        to my goal. I believe I can be valuable member in your team. <br />Sincerely, Olha Hozha.</p>
                </div>
                <div className='sidebar w-1/3 pl-4'>
                    <div className='education'>
                        <h2 className='mb-5 text-lg uppercase font-bold border-b-2'>Education</h2>
                        <ul>
                            <li className='mb-4'>Front-end Basic. Hillel IT school (2023)</li>
                            <li className='mb-4'>Front-end Pro. Hillel IT school (2023-2024)</li>
                            <li className='mb-4'>Karazin National University. Philological faculty (2005-2010)</li>
                        </ul>

                    </div>
                    <div className='skills flex justify-items-start flex-wrap'>
                        <div className='techSkills'>
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
                </div>
            </div>
            <div id='todo' className='todo'>
                <h2 className='text-lg uppercase font-bold mb-5 border-b-2' >ToDo-list</h2>
                <ToDo />
            </div>
        </main>
    )
}

export default Main;
