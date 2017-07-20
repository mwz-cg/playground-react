import React from 'react'
import ReactDOM from 'react-dom'

function Counter() {
  // FIXME: in JavaScript, there must not be a line terminator between a return and its value.
  // Surround the JSX expression with parentheses to fix the problem.

  // FIXME: a JSX template must have a single parent.
  // Put the <p> and the <button> elements in a top-level <div>
  return
      <p>Number of items: 0</p>
      {['+', '-'].map(label =>
        // TODO: add a key property to the <button> with value = {label}
        <button>{label}</button>
      )}
}

ReactDOM.render(<Counter />, document.getElementById('root'))
