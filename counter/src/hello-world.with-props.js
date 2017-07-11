import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(/* TODO: add a `props` argument */) {
  return (
    <div>
      <h1>Hello, {/* TODO: use the name property */}!</h1>
      {typeof(props) === 'undefined' && <p>TODO: add the props argument.</p>}
    </div>
  );
}

// TODO: add a name property with value "world"
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
