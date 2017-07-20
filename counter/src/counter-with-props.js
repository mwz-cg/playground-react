import React from 'react'
import ReactDOM from 'react-dom'

function Counter(/* TODO: add a `props` argument */) {
  return (
    <div>
      {typeof(props) === 'undefined' && <p>TODO: add the props argument.</p>}
      <p>Number of items: {/* TODO: use the initialCount property */}</p>
      {['+', '-'].map(label => <button key={label}>{label}</button>)}
    </div>
  )
}

// TODO: add an initialCount property with value 42 (in braces)
ReactDOM.render(<Counter />, document.getElementById('root'))
