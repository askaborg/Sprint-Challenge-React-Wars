# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is an open-source JavaScript library used for building UI with reusable components and handling the view layer for web and mobile apps.  React solves DOM performance via a virtual DOM and only updating a diff on the DOM tree.  React emphasizes on component-based and declaritive programing techniques to enhance code readability and debugging.  React uses stateful components so that we can easily manage re-renders of data that has changed.

1. What does it mean to think in react?

Think of breaking the UI into components that are modular so that our code can be reused, replaced, and debugged easily.

1. Describe state.

State is an object that represents the parts that can change in an app.

1. Describe props.

We pass read-only data and state to components through the use of props 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects occur outside the scope of the function.  We can sync effects by using a dependency array and putting in the state and props changes.
