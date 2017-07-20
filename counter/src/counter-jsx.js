import React from 'react'
import ReactDOM from 'react-dom'

function Counter() {
  // FIXME: in JavaScript, there must not be a line terminator between a return and its value.
  // Surround the JSX expression with parentheses to fix the problem.
  return
  // FIXME: a JSX template must have a single parent.
  // Put the <p> and the <button> elements in a top-level <div>
      <p>Number of items: 0</p>
      {['+', '-'].map(label => <button>{label}</button>)}
}

ReactDOM.render(<Counter />, document.getElementById('root'))
