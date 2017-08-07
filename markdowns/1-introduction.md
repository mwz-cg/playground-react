This playground aims to show you how to React quickly by covering what I consider to be the most important aspects of the library in a straight to the point manner. This chapter is an introduction to React.

# Differences with frameworks

When you look for comparisons between front-end frameworks, React is often compared with frameworks such as AngularJS (1.x), Angular (2/4), Vue, Ember, etc. that are using some variation of MVC/MVP/MVW (Model-View-Controller/Presenter/Whatever).

This is not entirely fair, given that React is not really a framework, but instead "a JavaScript library for building user interfaces". This follows the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): do one thing, and do it well. This also means that when you build an application with React, you will typically use React + other libraries, which is why you often hear about React + Redux for instance.

In this playground you will learn why React is often praised, and sometimes hated.

# Principles of React

## Component-based

A user interface in React is built with components. A component has its own mutable state, and it cannot modify the state of other components. It now seems logical, but remember that when React was released the most used framework was AngularJS with 2-way binding by default. A component can include other components and specify values based on its own state.

## Virtual DOM

React uses a virtual DOM rather than the DOM directly to optimize rendering. This is because operations on the DOM usually involve many steps (layout, styling) in addition to the tree operations themselves. React determines when a component needs rendering

## Simplicity

This is not a goal that is explicitly stated on their website, but I believe that this is a core aspect of React. By choosing to be only about the view, it ends up being a relatively small library with few concepts to grasp. Once you know React, you can then choose other libraries to handle other things than rendering; or you may stick with React only, if you prefer. Your choice!

# Your first React component

The first code snippet on the right is a minimalist React application with one `Counter` component that we will use as an example. This component can be used to store a number of items and increment/decrement it. Think of the shopping cart for your favorite e-commerce website.

Click the Run button below to compile the example and render it:

@[Your first React component]({
  "stubs": ["src/counter-basic.js"],
  "command": "./run.sh counter-basic",
  "project": "counter",
  "layout": "aside"
})

After importing the `React` and `ReactDOM` modules, we define a `Counter` function. Notice anything strange?

The function seems to return HTML directly! Actually, it does not return HTML but a tree of React elements (the so-called virtual DOM), and this is not HTML but JSX.

# JSX

JSX (originally JavaScript for XML - yes it comes from a time when the server was sending the client XML and not JSON) is a React-specific syntax extension of JavaScript. JSX expressions are transformed at build time into calls to `React.createElement` to create elements with children and attributes.

You can also see JSX in the last line here, as the first argument to `ReactDOM.render`:

```javascript
ReactDOM.render(<Counter />, document.getElementById('root'));
```

In fact, a JSX element can be any classic HTML-like element like `<p>` or `<div>`, or a React component, like our `<Counter />` element here. This allows components to instantiate other components.

You can use arbitrary JavaScript expressions in JSX by putting them between brackets. In contrast to templates, there are no special constructs to conditionally show/hide an element or iterate over a collection of elements; you do all that with JavaScript natively.

There are three things to keep in mind when using JSX:

* a JSX template is a tree and as such it must have a single root element. If your rendering function returns several elements, you'll have to put them in a single top-level element like a `<div>`.
* a JSX expression is just syntactic sugar that is transformed at build time into a JavaScript expression. This means that if you want to have a newline between a `return` statement and the JSX expression for readability, you must surround the JSX expression with parentheses. Otherwise, as stated in the ECMAScript standard, Automatic Semicolon Insertion will insert a semicolon before your expression, because there should not be a line terminator between a `return` statement and its value (if it has one).
* when you generate a list of elements, each element should have a `key` property with a distinct value, for performance reasons. If you don't do that, the code will still compile, but you'll see warnings in the console.

Fix the code below to follow these rules:

@[Example of JSX]({
  "stubs": ["src/counter-jsx.js"],
  "command": "./run.sh counter-jsx",
  "project": "counter",
  "layout": "aside"
})

There are also restrictions regarding attribute names (you cannot use an attribute named `for` for the obvious reason that this is a JavaScript keyword), but we will not cover them here.

## What if I don't like to have HTML in my JavaScript code?

First, if you prefer to isolate the view in a separate file, go for it: put the rendering function in its own file, and bam! there you go. Then, ask yourself: does it *really* change anything, other than having twice as many files?

Then again, remember that you're not really writing HTML; JSX is just easier to use than creating elements by hand. The thing is, if you are targeting a browser (you don't have to by the way, you could build a mobile app using React native instead), at some point this is going to require one of two things: either you give the browser some fixed HTML, or you manipulate the DOM dynamically. React does the latter, it just happens to be convenient to describe the view with HTML-like syntax (JSX). If you're not happy with JSX you could very well write a completely different language that would be more like a [Pug](https://pugjs.org) (formerly Jade) template or an [S-expression](https://en.wikipedia.org/wiki/S-expression) such as Racket's *[X-expression](https://docs.racket-lang.org/xml/index.html#%28def._%28%28lib._xml%2Fprivate%2Fxexpr-core..rkt%29._xexpr~3f%29%29)*:

```
(html
  (body ((bgcolor "red"))
    (h1 "Hi!")
    (br)
    "Bye!"))
```

Another concern that pops up frequently when developers discuss about React is the fact that there is JavaScript code inside the (pseudo-)HTML markup. This happens whenever you need to influence the structure of the generated markup such as adding/removing an element conditionally, or iterating over a list to produce elements repeatedly. Since HTML does not have built-in functionality to do that, we need to do it at the library/framework level: in Angular/Vue this means having special attributes with a special meaning. By contrast there is *nothing special in React* about conditions or loops: all you have is just simple, plain-old JavaScript code. And in the end I think that *this* is what makes React unique.
