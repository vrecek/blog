import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MAIN_PAGE from './components/Main page/MAIN_PAGE';

function App() {
    /*
        first:
        lewo duze
        prawo 2
        img abs
        (gap same)
        category w background
        title
        rating
        @CENTER
        na dole content

        second:
        border
        top img
        title
        text
        div: when & rate

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
