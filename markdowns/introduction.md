This playground aims to give you the basics of React.

# Differences with existing frameworks

Existing frameworks such as AngularJS (1.x)/Angular, Vue, or Ember, are frameworks using some variation of MVC/MVP/MVW (Model-View-Controller/Presenter/Whatever).

Rather than a framework, React is "a JavaScript library for building user interfaces". This follows the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): do one thing, and do it well. This also means that when you build an application with React, you will typically use React + other libraries, which is why you often hear about React + Redux for instance.

# Principles of React

## Component-based

A user interface in React is built with components. A component has its own mutable state.

## Virtual DOM

React uses a virtual DOM rather than the DOM directly to optimize rendering. This is because operations on the DOM usually involve many steps (layout, styling) in addition to the tree operations themselves.

