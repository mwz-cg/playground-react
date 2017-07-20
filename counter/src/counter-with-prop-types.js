import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Counter = props =>
  <div>
    {typeof(props.initialCount) === 'number' && <p>Error: <tt>initialCount</tt> is not a number.</p>}
    <p>Number of items: {props.initialCount}</p>
    {['+', '-'].map(label => <button key={label}>{label}</button>)}
  </div>

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired
}

// FIXME: 
ReactDOM.render(<Counter initialCount={42} />, document.getElementById('root'))
