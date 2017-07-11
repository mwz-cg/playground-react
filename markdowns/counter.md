# Hello, world!

This is a minimalist React application with one `HelloWorld` component:

@[Hello World app]({
  "stubs": ["src/hello-world.js"],
  "command": "yarn techio-start -- hello-world",
  "project": "counter"
})

After importing the `React` and `ReactDOM` modules, we define a `HelloWorld` function. Notice anything strange?

The function seems to return HTML directly! Actually, it does not return HTML but a tree of React elements (the so-called virtual DOM), and this is not HTML but a React-specific syntax extension of JavaScript called JSX. JSX expressions are transformed at build time into calls to `React.createElement` to create elements with children and attributes.

You can also see JSX in the last line here, that we use to refer to our `HelloWorld` component:

```javascript
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```

# JSX

You can use arbitrary JavaScript expressions in JSX by putting them between brackets. In contrast to templates, there are no special constructs to conditionally show/hide an element or iterate over a collection of elements; you do all that with JavaScript natively.

For example:

@[Example of JSX]({
  "stubs": ["src/hello-world.jsx.js"],
  "command": "yarn techio-start -- hello-world.jsx",
  "project": "counter"
})

TODO 1: returning a value that starts on a different line is not permitted on JavaScript due to Automatic Semicolon Insertion. Use () to avoid that.

TODO 2: a virtual DOM must have one root.

TODO 3: lists of elements must have 'key' attribute (required by React for performance reasons).

# Properties

Components can have immutable state in the form of read-only properties, also known as *props*. To have props, a component declares an additional `props` argument that is a plain old JavaScript object. Property names and associated values of props are specified in JSX with the `name="value"` syntax when the component is instantiated.

In the example below, add an initial value given with props:

@[Hello World app]({
  "stubs": ["src/hello-world.with-props.js"],
  "command": "yarn techio-start -- hello-world.with-props",
  "project": "counter"
})

# Property types

TODO: show an example of props destructured directly?

# Components with class

# State

# Reference

TODO: ref=

# Callbacks

* componentDidMount/componentWillUnmount callbacks
* shouldComponentUpdate
* forceUpdate
