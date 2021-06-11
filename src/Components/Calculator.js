import React, { useState } from 'react'

const buttonsData = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '=', 'AC', 0, '.']

const Calculator = () => {
  const [value, setValue] = useState('')

  const onButtonClick = (button) => {
    if (button === '=') {
      try {
        setValue(eval(value))
      } catch (e) {
        setValue("Error")
      }
    }
    else if (button === 'AC') {
      setValue('')
    } else {
      setValue(`${value}${button}`)
    }
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="calculator-input">
          <div className="input">
            <span>{value}</span>
          </div>
        </div>
        <div className="calculator-buttons">
          {buttonsData.map((button, key) => (
            <button key={key}
              onClick={() => onButtonClick(button)}
              className={typeof button === 'string' ? 'button-action' : 'button-number'}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
