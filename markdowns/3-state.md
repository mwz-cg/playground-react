# Event handling

Until now the buttons in our counter had no effect. In the following example, we will add event handlers to the plus and minus buttons. First, we define an array of possible actions `INCREMENT` and `DECREMENT`, along with a `labels` prop that defines the labels of our buttons. Right now, all we will do is log the action received in the console.

Fix the first snippet on the right to handle clicks on the buttons to call the event handler.

@[Counter with event handling]({
  "stubs": ["src/counter-event-handler.js"],
  "command": "./run.sh counter-event-handler",
  "project": "counter",
  "layout": "aside"
})

# Components with class

So far we've only dealt with so-called *functional components*. Our counter is indeed a pure function that take inputs (initial count, labels) and returns a virtual DOM with a paragraph and buttons. What we would like, though, rather than just printing in the console when the user increments/decrements the counter, is to store and print the current value of the counter. For that, we will need to define a component that can have a state.

A stateful component is typically defined as a class extending `React.Component` and implementing a `render` function that returns the virtual DOM for that component. To have state, the constructor of that component defines a state variable with the properties that we will use.

Add a `count` property to the state of the component in the `counter-class` code.

@[Counter class]({
  "stubs": ["src/counter-class.js"],
  "command": "./run.sh counter-class",
  "project": "counter",
  "layout": "aside"
})

# State

To update the state of a component, the component must call the `setState` function with an argument that is the update function. The update function takes the current state and the props as arguments, and must return an object with the properties of the state that should be updated to a new value. Other properties remain the same.

In the last code snippet, implement the decrement action in the handleClick method:

@[Stateful counter]({
  "stubs": ["src/counter-state.js"],
  "command": "./run.sh counter-state",
  "project": "counter",
  "layout": "aside"
})
