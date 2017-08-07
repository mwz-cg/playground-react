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

# Uncontrolled components

@[Counter uncontrolled form]({
  "stubs": ["src/counter-form-uncontrolled.js"],
  "command": "./run.sh counter-form-uncontrolled",
  "project": "counter",
  "layout": "aside"
})
