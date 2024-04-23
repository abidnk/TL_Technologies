import React from 'react'
import './components.css'

export const Button = ({ value, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {value}
        </button>
    )
}