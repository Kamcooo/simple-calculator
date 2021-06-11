import React from 'react'

const buttonsData = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '=', 'AC', 0, '.']

const Calculator = () => {
  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="calculator-input">
          <input />
        </div>
        <div className="calculator-buttons">
          {buttonsData.map((button, key) => (
            <button key={key} className={typeof button === 'string' ? 'button-action' : 'button-number'}>{button}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
