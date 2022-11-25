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
import ADMIN_PAGE from './components/Admin/ADMIN_PAGE';
import fetchFunction from './functions/fetchFunction';
import UserType from './interfaces/UserType';
import {PossibleUser} from './interfaces/UserType'
import { defaultStateLoadHook, StateLoadingHook } from './interfaces/CommonInterfaces';
import ERROR_PAGE from './components/Error/ERROR_PAGE';
import CookiePopup from './components/Layout/CookiePopup/CookiePopup';
import Cookies from 'universal-cookie'

const UserContext = React.createContext<PossibleUser>(null)

function App() {
    const [user, setUser] = React.useState<StateLoadingHook<UserType>>(defaultStateLoadHook)
    const [hasConfirmedCookie, setConfirm] = React.useState<boolean>(!!new Cookies().get('hucc'))

    React.useEffect(() => {
        fetchFunction<UserType>(
            { url: process.env.REACT_APP_API_USER_LOGGED!, type: 'GET' },
            { position: 'fixed', appendTo: document.body },

            user => {
                setUser({
                    finished: true,
                    data: user
                })
            },

            err => {
                setUser({
                    finished: true,
                    data: null
                })
            }
        )
    }, [])

    
    if(user.finished)
    return (
        <div className="App">
        
            <Router>

                <UserContext.Provider value={user.data}>

                    <Routes>

                        <Route path='/' element={<MAIN_PAGE />} />

                        <Route path='/sign-in' element={<LOGIN_PAGE />} />
                        <Route path='/register' element={<REGISTER_PAGE />} />

                        <Route path='/contact' element={<CONTACT_PAGE />} />

                        <Route path='/search/:type/:query' element={<SEARCH_PAGE />} />

                        <Route path='/article/:id' element={<ARTICLE_PAGE />} />

                        <Route path='/profile' element={<PROFILE_PAGE />} />

                        <Route path={`/admin/${process.env.REACT_APP_ADMIN_URL}`} element={<ADMIN_PAGE />} />

                        <Route path='/error' element={<ERROR_PAGE />} />

                    </Routes>

                    {
                        !hasConfirmedCookie
                            && <CookiePopup setCk={setConfirm} />
                    }

                    <ArrowTop />
                    <HiddenMenu />

                </UserContext.Provider>

            </Router>

        </div>
    )

    return <></>
}

export default App;
export {UserContext}