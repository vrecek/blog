import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MAIN_PAGE from './components/Main page/MAIN_PAGE';

function App() {
    /*
        third:
        lewo img
        category
        title
        txt
        div:
        rate when

    */
    return (
        <div className="App">
        
            <Router>

                <Routes>

                    <Route path='/' element={<MAIN_PAGE />} />

                </Routes>

            </Router>

        </div>
    )
}

export default App;
