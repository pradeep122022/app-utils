import React from 'react'
import "./style.css"
const UnderlineInput = () => {
    return (
        <div className="wrapper">
            <input className="input" placeholder="Please Enter Text" type="text" />
                <span className="underline"></span>
        </div>
    )
}

export default UnderlineInput