We will now add the possibility to specify a number of items using a text input. There are two ways to create forms in React: controlled components and uncontrolled components.

# Controlled components

This is the approach that React recommends, in which form data is handled by the component rather than by the DOM. The React component is the "single source of truth".

Fix the `counter-form-controlled` example to use the `handleChange` function when the input changes.

@[Counter controlled form]({
  "stubs": ["src/counter-form-controlled.js"],
  "command": "./run.sh counter-form-controlled",
  "project": "counter",
  "layout": "aside"
})

Note that you need to bind `this.handleChange` to `this` in the constructor so you can refer to the `handleChange` function directly. Otherwise you would have to use `onChange={event => this.handleClick(event)}`, which has the unfortunate effect of creating a different callback every time the component renders.

# Uncontrolled components

When you don't need to track the state in the React component, your component is said to be uncontrolled. In this case, to access the values of your form you need to use a reference to the DOM. This is done with the special `ref` attribute whose value is a callback that receives the DOM element as its argument.

Fix the uncontrolled counter code by ... + Number.parseInt

@[Counter uncontrolled form]({
  "stubs": ["src/counter-form-uncontrolled.js"],
  "command": "./run.sh counter-form-uncontrolled",
  "project": "counter",
  "layout": "aside"
})
