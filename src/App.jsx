import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import ThemeContext from "./helpers/context.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Todo from "./pages/Todo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const colorState = useState({
        textColor: '#313c4d',
        bgColor: 'white',
    });
    console.log(colorState);

    return (
        <div className='flex flex-col h-[100vh] mx-auto'>
            <ThemeContext.Provider value={colorState}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/todo' element={<Todo/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}

export default App;
