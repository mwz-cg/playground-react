import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Counter = props =>
  <div>
    <p>Number of items: {props.initialCount}</p>
    {['+', '-'].map(label => <button key={label}>{label}</button>)}
  </div>

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired
}

// FIXME: use the correct property with the right type
// check the browser console for warnings
ReactDOM.render(<Counter initialCout="42" />, document.getElementById('root'))
