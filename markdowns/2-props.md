# Properties

Components can have immutable state in the form of read-only properties, also known as *props*. To have props, a component declares an additional `props` argument that is a plain old JavaScript object. Property names and associated values of props are specified in JSX with the `name=value` syntax when the component is instantiated. The value must be either a string (in quotes) or a JavaScript value in braces.

In the first example on the right, add an initial value to the counter with props:

@[Counter with props]({
  "stubs": ["src/counter-with-props.js"],
  "command": "yarn techio-start -- counter-with-props",
  "project": "counter",
  "layout": "aside"
})

So far, so good. But how do we check that the user of our component has indeed set a value for our property, and with the right type?

# Property types

Enter property types. When the `propTypes` attribute is set on a component, it specifies the type of each property that a component accepts, and whether it is required. A required property with no value, or with a value of the wrong type, will show a warning in the browser console.

Fix the `counter-with-prop-types` code to remove warnings:

@[Counter with property types]({
  "stubs": ["src/counter-with-prop-types.js"],
  "command": "yarn techio-start -- counter-with-prop-types",
  "project": "counter",
  "layout": "aside"
})

# Default property values

Props can have default values. This allows a component to have properties that are required, but whose value may be omitted when instantiating the component.

Fix the code `counter-with-default-props` to add a default value to `initialCount` to remove the warning:

@[Counter with default props]({
  "stubs": ["src/counter-with-default-props.js"],
  "command": "yarn techio-start -- counter-with-default-props",
  "project": "counter",
  "layout": "aside"
})

# Props and hierarchical components

A child component receive props from its parent component based on the parent's state. Whenever the parent's state changes, the child receives new props and if these are different from the child's current props, this triggers a render of the child.

The parent component has a list of its children stored in the `props.children` opaque property. To count or iterate on its children, you need to use the `count`, `map`, `forEach` functions of `React.Children`.
