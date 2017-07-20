# Introducing the Counter component

This is a minimalist React application with one `Counter` component that we will use as an example. This component can be used to store a number of items and increment/decrement it.

@[Counter app]({
  "stubs": ["src/counter-basic.js"],
  "command": "yarn techio-start -- counter-basic",
  "project": "counter"
})

After importing the `React` and `ReactDOM` modules, we define a `Counter` function. Notice anything strange?

The function seems to return HTML directly! Actually, it does not return HTML but a tree of React elements (the so-called virtual DOM), and this is not HTML but a React-specific syntax extension of JavaScript called JSX. JSX expressions are transformed at build time into calls to `React.createElement` to create elements with children and attributes.

You can also see JSX in the last line here, as the first argument to `ReactDOM.render`:

```javascript
ReactDOM.render(<Counter />, document.getElementById('root'));
```

# JSX

You can use arbitrary JavaScript expressions in JSX by putting them between brackets. In contrast to templates, there are no special constructs to conditionally show/hide an element or iterate over a collection of elements; you do all that with JavaScript natively.

There are two things to keep in mind when using JSX:

* a JSX template is a tree and as such it must have a single root element. If your rendering function returns several elements, you'll have to put them in a single top-level element like a `<div>`.
* a JSX expression is just syntactic sugar that is transformed at build time into a JavaScript expression. This means that if you want to have a newline between a `return` statement and the JSX expression for readability, you must surround the JSX expression with parentheses. Otherwise, as stated in the ECMAScript standard, Automatic Semicolon Insertion will insert a semicolon before your expression, because there should not be a line terminator between a `return` statement and its value (if it has one).
* when you generate a list of elements, each element should have a `key` property with a distinct value, for performance reasons. If you don't do that, the code will still compile, but you'll see warnings in the console.

Fix the code below to follow these rules:

@[Example of JSX]({
  "stubs": ["src/counter-jsx.js"],
  "command": "yarn techio-start -- counter-jsx",
  "project": "counter"
})

There are also restrictions regarding attribute names (you cannot use an attribute named `for` for the obvious reason that this is a JavaScript keyword), but we will not cover them here.

# Properties

Components can have immutable state in the form of read-only properties, also known as *props*. To have props, a component declares an additional `props` argument that is a plain old JavaScript object. Property names and associated values of props are specified in JSX with the `name=value` syntax when the component is instantiated. The value must be either a string (in quotes) or a JavaScript value in braces.

In the example below, add an initial value to the counter with props:

@[Hello World app]({
  "stubs": ["src/counter-with-props.js"],
  "command": "yarn techio-start -- counter-with-props",
  "project": "counter"
})

So far, so good. But how do we check that the user of our component has indeed set a value for our property, and with the right type?

# Property types

Property types allow us to do exactly that.
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

TODO: show an example of props destructured directly?

# Components with class

# State

# Reference

TODO: ref=

# Callbacks

* componentDidMount/componentWillUnmount callbacks
* shouldComponentUpdate
* forceUpdate
