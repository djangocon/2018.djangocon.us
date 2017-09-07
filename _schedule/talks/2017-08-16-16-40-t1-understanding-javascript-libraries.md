---
abstract: |
    Trying to keep up with the JavaScript ecosystem can be overwhelming. New
    tools release every month, and the benefits of a given library over any other is
    unclear. Join Django Unleashed author Andrew Pinkham as he shares his  experience
    learning React and helps demystify the JS ecosystem.
accepted: true
category: talk
date: 2017-08-16 16:40:00 -0500
difficulty: Beginner
layout: session-details
permalink: /talks/understanding-javascript-libraries-via-react-and-the-react-ecosystem/
presenters:
- bio: |
    Andrew Pinkham is the author of Django Unleashed (Pearson; [django-unleashed.com](https://django-unleashed.com))
    and the founder and lead engineer at [JamBon Software](https://www.jambonsw.com/),
    which provides development consulting services and instruction in Python, Django,
    and JavaScript. Andrew is passionate about usability, security and distributed
    systems. He actively contributes to Django, and loves doing so. He is a 2009 graduate
    of Dartmouth College and currently resides in Boston, MA.
  company: JamBon Software
  github: ''
  name: Andrew Pinkham
  photo_url: 'https://www.gravatar.com/avatar/ed38bdd910a09be6e706c1487112fe16?s=400'
  twitter: andrewsforge
  website: http://jambonsw.com
room: 'Ballroom A'
sitemap: true
slides_url: 'https://speakerdeck.com/jambonrose/understanding-javascript-libraries-via-react-and-the-react-ecosystem'
title: Understanding JavaScript Libraries via React and the React Ecosystem
video_url: 'https://youtu.be/g8d6UbVCuuw'
---

After an initial foray into JavaScript in 2011, I actively avoided learning or using JavaScript. Then, in early 2017, JamBon Software took on a project to build a bleeding-edge JavaScript web app in Facebook's React. Suddenly, I did not have a choice and had to learn JavaScript---versions 5 and 6---as well as Facebook's React library with the entire JavaScript and React ecosystems behind it.

This talk will give developers a framework to analyze the overwhelming number of tools in the JavaScript world by categorizing the types of problems currently being solved. By the end, you'll walk away with a mental framework of the solutions being built today.

We will start by looking at a history of JavaScript. This will allow us to discuss problems that developers need to solve in browsers when interacting with APIs. With a full understanding of the problems, we'll turn our attention to discussing the types of solutions available and quickly discuss how different libraries like Angular, Vue, Inferno, and Cycle implement these solutions.

The talk will then explain how to use React in tandem with Redux to build a tiny website. We will demonstrate how to use tools like Webpack, fetch, Promises, and thunks to enhance React to solve the problems previously discussed.

Finally, we'll end with a review of the material, and consider some of the topics being looked at by Facebook, Google and Microsoft.

Outline:

- Libraries as Systems to Concretize Abstract Thought
- Understanding the Problem
- Node, NPM, and Yarn
- DOM-Focused JavaScript Libraries
- Understanding React
- Enhancing React
  - Converting ES6 with Babel or Bublé
  - Aside: Handling types with Immutable.js, Typescript, and Tern
  - Handling Modules with Webpack or Rollup
  - Polyfills for Behavior
  - Replacing XMLHttpRequest with fetch
  - Using Promises and thunks for asynchronous actions
  - React-Router for Single-Page Apps
  - Redux-Forms for User Input
  - Linting with ESLint
  - Testing in 2 minutes
- React with Django
- Conclusion
  - Review of Problems
  - Review of Solution Types
  - Break Down: Modules vs Syntax Transformations
  - Performance with InfernoJS
  - Future JS
