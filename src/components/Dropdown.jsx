import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import './components.css'

export const Dropdown = ({ options, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <div className="dropdown">
            <div className="dropdown-input-container">
                <input
                    type="text"
                    className="dropbtn"
                    placeholder={placeholder}
                    value={selectedOption}
                    onChange={() => {}}
                    onClick={toggleDropdown}
                />
                <div className="downarrow">
                    <FaAngleDown />
                </div>
            </div>

            {isOpen && (
                <ul className="dropdown-content">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

