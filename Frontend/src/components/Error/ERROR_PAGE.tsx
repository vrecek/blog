import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import ErrorLocationState from '../../interfaces/ErrorPageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ErrorPage.css'
import FigureImage from '../Common/FigureImage'
import error from '../../images/error.png'
import InformationContainer from './InformationContainer'

const ERROR_PAGE = () => {
    const state = useLocation().state as ErrorLocationState,
          n: NavigateFunction = useNavigate()


    React.useEffect(() => {
        if(!state) n('/', { replace: true })
    })

    if(state) {
        const {msg, code} = state

        return (
            <LayoutWrap>
    
                <main className="error-page">
    
                    <InformationContainer code={code} msg={msg} />
                    <FigureImage source={error} altTxt='Error' />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default ERROR_PAGE