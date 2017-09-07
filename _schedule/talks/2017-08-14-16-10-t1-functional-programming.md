---
abstract: 'Functional programming  can reduce lines of code while adding safety and
  efficiency. In this talk, we''ll get an understanding of the foundations of FP,
  look at what python does and does not have to help us out, and try to decide if
  it''s a good idea to use these FP concepts in day-to-day python.  '
accepted: true
category: talk
date: 2017-08-14 16:10:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talks/functional-programming-in-an-imperative-world-maybe/
presenters:
- bio: 'Derik is lucky enough to spend most of his days wrangling backend web services
    using python and a bit of django, but he still has time to be fascinated by functional
    programming and new ways to think about code. He currently lives in Chattanooga,
    TN with his partner and mischief-making doppelganger, Moon. '
  company: ''
  github: gignosko
  name: Derik Pell
  photo_url: https://avatars0.githubusercontent.com/u/6536109?v=4&s=400
  twitter: _gignosko_
  website: http://blog.gignosko.me
room: 'Ballroom A'
sitemap: true
slides_url: ''
title: Functional Programming in an Imperative World. Maybe
video_url: 'https://youtu.be/Nk2kqwz7jjs'
---

### The pillars of FP
Let's start by looking at the core concepts that differentiate FP from the OO / imperative style most programmers are familiar with. Along the way I'll introduce you to:

1. Immutable data structures. Having data structures that don't change makes your code safer, especially when dealing with concurrency and parallelism, but they require you to approach solutions in a different way than you would with mutable data.

2. "Pure" functions. Pure, or idempotent, functions do not mutate state or cause other kinds of side effects. As a result, you are guaranteed that every time you call a function with the same parameters, you will always get the same value.

3. Recursion: While recursion is something most of us know about, it's not something we tend to use often in imperative programming, and with good reason. Nonetheless, it's a worth knowing about it's various forms.

4. Function composition. When you have pure functions that handle only one task, you can build larger, more complex and more beneficial programs by composing functions together to form new functions.

5. First class functions: passing around functions as parameters and return values, just like any other object.

6. The holy trinity: map, reduce, filter. These three functions are the work horses of FP, helping us manipulate and transform data quickly and elegantly.

### FP in python
Now, let's take a look at how we can or cannot apply these concepts in python.

1. While most data structures in python are mutable, tuples are a built in immutable data structure that we have at our disposal. We'll see that tuples have a solid place in python, but they're not as easy to work with as we might like.

2. Recursion isn't really well developed in python (on purpose) so let's take a look at it's pitfalls and how to avoid them.

3. Function composition is something you probably already do some in python and perhaps don't even know it.

4. The trinity:

    Filter is easy, we just call it "list comprehension"

    Reduce. Let's try to get beyond flattening nested lists and doing tricks with math.

    Map. You probably don't use this enough in python so let's see if we can change that.

### FP is great! Maybe.
Now that we've seen how FP can be used, we really need to decide if it should be used. Python is not a functional programming language, despite the tools it has. We've talked about some of the technical drawbacks to these tools, but we also need to decide if working in an FP paradigm is right for our work environment. We'll look at some examples of where running into FP can be jarring and talk about the additional cognitive load on co-workers who aren't used to seeing these tools in place.
