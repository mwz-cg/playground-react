import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// destructure props directly into variables
const Counter = ({initialCount, labels}) =>
  <div>
    <p>Number of items: {initialCount}</p>
    {labels.map(label => <button key={label}>{label}</button>)}
  </div>

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.objectOf(PropTypes.string)
}

// FIXME: add a default value for the initialCount property
Counter.defaultProps = {
  labels: ['Add', 'Remove']
}

ReactDOM.render(<Counter labels={['+', '-']} />, document.getElementById('root'))
