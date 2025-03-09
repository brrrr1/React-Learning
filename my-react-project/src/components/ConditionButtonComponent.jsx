import React from 'react'

function ConditionButtonComponent(props) {

    const handleCondition = () => {
        props.setCondition(!props.condition)
        console.log(props.condition)
    }

  return (
    <button onClick={handleCondition}>Condición</button>
  )
}

export default ConditionButtonComponent