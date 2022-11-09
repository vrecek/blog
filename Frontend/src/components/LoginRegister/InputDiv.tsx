import React from 'react'
import { IInputDiv } from '../../interfaces/LoginRegisterInterfaces'

const InputDiv = ({label, type, additionalToContainer, additionalToInput, inputClass, divClass}: IInputDiv) => {
    return (
        <div className={`input-div ${divClass ?? ''}`}>

            <label>{label}</label>

            <div className='input-wrap'>

                <input className={inputClass ?? ''} type={type} spellCheck='false' />
                { 
                    additionalToInput && 
                        <>{additionalToInput}</>
                }

            </div>

            {
                additionalToContainer &&
                    <>{additionalToContainer}</>
            }

        </div>
    )
}

export default InputDiv