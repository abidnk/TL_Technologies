import React from 'react'
import './components.css'



export const Input = ({ type, labels, placeholder, h, onChange, required }) => {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>{labels}
            {required && <span style={{ color: 'red' }}> *</span>} 
            </label>
            <input
                type={type}
                className="input"
                style={{ height: h }}
                placeholder={placeholder}
                onChange={handleChange}
                required={required} 

            />
        </div>
    )
}