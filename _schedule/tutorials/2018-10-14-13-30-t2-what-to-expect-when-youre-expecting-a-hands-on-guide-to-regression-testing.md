---
abstract: We all know we should be testing our applications, but testing is hard and
  great testing is even harder. Take a deep dive into what and how to test your Django
  apps, plus learn how to leverage modern headless browser libraries and automated
  visual diff-ing to get (and keep) pixel-perfect apps.
accepted: true
category: tutorial
date: 2016-07-18 09:00
difficulty: Intermediate
layout: session-details
permalink: /tutorial/what-to-expect-when-youre-expecting-a-hands-on-guide-to-regression-testing/
presenters:
- bio: "Emily Morehouse-Valcarcel is the Cofounder and Director of Engineering of\
    \ Cuttlesoft, a digital product development agency focused on creating beautifully\
    \ designed and highly scalable custom software. Her passion is driven by the unique\
    \ blend of empathy, strategy, curiosity, and human-centered design. When she isn\u2019\
    t leading Cuttlesoft, Emily is an avid Open Source Software contributor and constant\
    \ learner with side projects focused on automating the mundane, improving daily\
    \ life, and shedding light on the complexity of the human experience. A graduate\
    \ of the Florida State University, Emily holds bachelor's degrees in Computer\
    \ Science, Criminology, and Theatre."
  company: Cuttlesoft
  github: ''
  name: Emily Morehouse-Valcarcel
  photo_url: ''
  twitter: emilyemorehouse
  website: http://emilyemorehouse.com
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: "What To Expect When You\u2019re Expecting: A Hands-On Guide to Regression\
  \ Testing"
track: ''
video_url: ''
---

We all know we should be testing our applications, but testing is hard and great testing is even harder.

Take a deep dive into what types of things to test and how to approach testing them in your Django apps, plus learn how to leverage modern headless browser libraries and automated visual diff-ing to get (and keep) pixel-perfect apps.

We'll cover types of testing as a whole, plus practical applications and deep dives for testing in Django and visual regression testing with Javascript (whether for templates rendered by Django or for a standalone Javascript client application).

## Tutorial Outline

* Introduction (10 mins, 10 mins total)
  * Introduction, outline, and expectations of what you should take away from this tutorial
* Foundational Knowledge for Testing (35 mins, 45 mins total)
  * Testing, Wat?
    * We all know we should be writing tests for our code, but what does that really mean?
    * What does writing tests “in the real world” look like?
  * Rapid-Fire Introduction to Testing: 20,000-foot view, short descriptions of different types of   testing
    * What kinds of tests are most impactful for different use cases?
  * The Importance Of Consistent Regression Testing
    * Change blindness
  * Anatomy Of A Test
    * Ingredients for successful testing
    * Process and workflows for testing
  * What Should You Be Testing?
    * Good tests mimic good bug reports
  * Approaches For Regression Testing
  * Approaches For Visual Regression Testing
    * Visual Regression Testing Is Easier In 2018!
* Walkthrough - Regression Testing in Django (1 hr, 1.75 hr total)
  * From a carefully crafted starter application, we'll walk through the important aspects of our application that must, could and should be tested. We'll also cover tips for scoping out areas that are more likely to have bugs introduced, ways to separate your code appropriately for the best testing approaches, and best practices for what and how to mock.
* Walkthrough - Visual Regression Testing Powered By Javascript (45 mins, 2.5 hrs total)
  * From our same carefully crafter starter app, we'll add visual regression tests using my test runner, test assertion, web driver, and image diff libraries of choice. (Yes, you CAN use Python for this, but there are some awesome JS libraries that make our lives even easier).
* Flex Time (remainder of time left)
  * Additional time for breaking things and putting them back together, questions, helping each other, etc.
* Conclusion
  * Wrap up, call to action, and suggested tools/resources

## Audience Expectations

A foundational knowledge of Python and a web framework of choice is beneficial, as we'll dive right into testing an existing application. Starter code and code progressions will be provided, so you don't have to be a Django expert to grasp the content! Whether you love, hate, or have never used Javascript, you'll feel at home; our use of JS will be limited to leveraging libraries to gather data and screenshots for visual regression testing, whether for a JS client or a Django web app.