import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MAIN_PAGE from './components/Main page/MAIN_PAGE';
import ArrowTop from './components/Layout/ArrowTop/ArrowTop';
import LOGIN_PAGE from './components/LoginRegister/Login/LOGIN_PAGE';
import REGISTER_PAGE from './components/LoginRegister/Register/REGISTER_PAGE';
import HiddenMenu from './components/Layout/HiddenMenu/HiddenMenu';
import CONTACT_PAGE from './components/Contact page/CONTACT_PAGE';
import SEARCH_PAGE from './components/Search page/SEARCH_PAGE';
import ARTICLE_PAGE from './components/Article page/ARTICLE_PAGE';
import PROFILE_PAGE from './components/Profile page/PROFILE_PAGE';

function App() {
    return (
        <div className="App">
        
            <Router>

                <Routes>

                    <Route path='/' element={<MAIN_PAGE />} />

                    <Route path='/sign-in' element={<LOGIN_PAGE />} />
                    <Route path='/register' element={<REGISTER_PAGE />} />

                    <Route path='/contact' element={<CONTACT_PAGE />} />

                    <Route path='/search'>

                        <Route path='bar/:query' element={<SEARCH_PAGE />} />
                        <Route path='category/:query' element={<SEARCH_PAGE />} />
                        <Route path='subcategory/:query' element={<SEARCH_PAGE />} />

                    </Route>

                    <Route path='/article/:id' element={<ARTICLE_PAGE />} />

                    <Route path='/profile' element={<PROFILE_PAGE />} />

                </Routes>

                <ArrowTop />
                <HiddenMenu />

            </Router>

        </div>
    )
}

export default App;
