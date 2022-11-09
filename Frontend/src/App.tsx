import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MAIN_PAGE from './components/Main page/MAIN_PAGE';
import ArrowTop from './components/Layout/ArrowTop/ArrowTop';
import LOGIN_PAGE from './components/LoginRegister/Login/LOGIN_PAGE';
import REGISTER_PAGE from './components/LoginRegister/Register/REGISTER_PAGE';

function App() {
    return (
        <div className="App">
        
            <Router>

                <Routes>

                    <Route path='/' element={<MAIN_PAGE />} />

                    <Route path='/sign-in' element={<LOGIN_PAGE />} />
                    <Route path='/register' element={<REGISTER_PAGE />} />

                </Routes>

                <ArrowTop />

            </Router>

        </div>
    )
}

export default App;
