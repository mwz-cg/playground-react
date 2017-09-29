import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ACTIONS = ['INCREMENT', 'DECREMENT'];

const Counter = ({initialCount, labels}) => {
  let handleClick = action => {
    console.log(`Received action ${action}`)
  }

  return (
    <div>
      <p>Number of items: {initialCount}</p>
      {ACTIONS.map(action =>
        <button
          key={action}
          onClick={void 0 /* TODO: define a function that calls handleClick(action) */}
        >
          {labels[action]}
        </button>)}
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired
}

Counter.defaultProps = {
  initialCount: 0
}

ReactDOM.render(<Counter labels={{INCREMENT: '+', DECREMENT: '-'}} />, document.getElementById('root'))
