import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

    // checks if the button we use has an implemented style, then use that style and if not use the style mentioned above
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
     
    // checks if a pre disposed style is applied to the button and if not apply the style from the size's index position
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    // checks if a pre disposed color for the button is available
    const checkButtonColor = STYLES.includes(buttonColor) ? 
    buttonColor: COLOR[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}