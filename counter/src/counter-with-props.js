import React from 'react';
import ReactDOM from 'react-dom';

function Counter(props/* TODO: add a `props` argument */) {
  return (
    <div>
      {typeof(props) === 'undefined' && <p>TODO: add the props argument.</p>}
      <p>Number of items: {props.initialCount/* TODO: use the initialCount property */}</p>
      {['+', '-'].map(label => <button>{label}</button>)}
    </div>
  );
}

// TODO: add an initialCount property with value 42
ReactDOM.render(<Counter initialCount={42} />, document.getElementById('root'));
