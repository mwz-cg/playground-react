import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  let items =
    [{label: 'Choice A', value: 'a'},
    {label: 'Choice B', value: 'b'},
    {label: 'Choice C', value: 'c'}];

  return (
    <div>
      <h1>Hello, world!</h1>
      <form>
        {
          items.map(item =>
            <label key={item.value}>{item.label}
              <input type="radio" name="choices" value={item.value} />
            </label>
          )
        }
      </form>
    </div>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
