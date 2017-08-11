// { autofold
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// }

// destructure props directly into variables
const Counter = (props) => {
  // check PropTypes explicitly because we are using the production version of React
  // normally in development this is done for you by React
  PropTypes.checkPropTypes(Counter.propTypes, props, 'prop', 'Counter');

  let {initialCount, labels} = props;
  return (
    <div>
      <p>Number of items: {initialCount}</p>
      {labels.map(label => <button key={label}>{label}</button>)}
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string)
}

// FIXME: add a default value for the initialCount property
Counter.defaultProps = {
  labels: ['Add', 'Remove']
}

ReactDOM.render(<Counter labels={['+', '-']} />, document.getElementById('root'))
