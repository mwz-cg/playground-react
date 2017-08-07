At this point, our counter supports adding/removing items, but it lacks interaction with a server. Let's say that you have ordered 10 copies of a book on your phone, and you want to review your order on your laptop. We will now modify our counter to support this use case, and for that we need to learn about lifecycle methods.

# Lifecycle methods

A component can implement callback functions that are called by React when particular events occur. These functions are named *lifecycle methods* and are called:

* before/after the component is mounted (inserted into the DOM): `componentWillMount`/`componentDidMount`,
* before it receives new props: `componentWillReceiveProps`,
* whether the component should be re-rendered: `shouldComponentUpdate`,
* before/after it is re-rendered: `componentWillUpdate`/`componentDidUpdate`),
* and finally before the component is unmounted: `componentWillUnmount`.

We have already used `setState` to update the state of a component, the only other method from `React.Component` that a component might call directly is `forceUpdate` to force a component to update (regardless of whether its props or state have changed).

# Load the initial number of items

@[Counter fetch]({
  "stubs": ["src/counter-did-mount.js"],
  "command": "./run.sh counter-did-mount server",
  "project": "counter",
  "layout": "aside"
})
