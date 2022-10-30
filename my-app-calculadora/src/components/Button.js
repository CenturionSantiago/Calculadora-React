import React from 'react'
import '../stylesheets/Button.css'

const Button = (props) => {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }


  return (
    <div className={`button-container ${esOperador(props.children) ? 'operator' : null}`} 
    onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  )
}

export default Button