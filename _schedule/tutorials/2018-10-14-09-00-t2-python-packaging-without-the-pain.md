---
abstract: Many of us have snippets of Python code we copy from project to project. Wouldn't it be nice if we could `pip install` them from PyPI instead of copy-pasting everywhere? But packaging has always been a complicated, scary task. We will take you from copy/paste to `pip install` in one tutorial!
accepted: true
category: tutorial
date: 2016-07-18 09:00
difficulty: Intermediate
layout: session-details
permalink: /tutorial/python-packaging-without-the-pain/
presenters:
- bio: "Diane Chen has 20+ years of experience programming Engineering CAD/CAM software, has built a few websites and worked in hardware testing.\r\nEnamored with the Python programming language, she teaches Python at [UC San Diego Extension](http://bit.ly/UCSDPython), workshops and private courses.

She is also an online coach for Two Scoops Press course [Creating and Distributing Python Packages](https://courses.twoscoopspress.com/courses/creating-and-distributing-python-packages).

Additionally, she contributes to open source software, is active in the local Python and PyLadies user groups and is an organizer and coach for DjangoGirls workshops in the San Diego area."
  company: ''
  github: ''
  name: Diane DeMers Chen
  photo_url: ''
  twitter: purplediane88
  website: http://purplediane.github.io/
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Python Packaging without the Pain
track: ''
video_url: ''
---

This tutorial takes the FRIGHT out of Python packaging.

We'll cover all the steps, including creating a Python package, putting the documentation on Read The Docs, implementing a continuous integration test suite, and deploying your package to the Python Package Index.

We'll rely on the wonderful [Cookiecutter](https://github.com/audreyr/cookiecutter) tool to make our life a lot easier during the packaging process, taking your module, function or snippet of Python code and turning it into a Python package, getting around the finicky installation hassles.

Once your project is on PyPI, you can add more tests, documentation, and even get some help on your code by collaborating with other open source developers on enhancements and bug fixes.

If you're a Pythonista or Djangonaut with a module, function, or even a small code snippet that would be useful as a Python package, this tutorial is for you!

Some things we’ll cover:

- Installing Cookiecutter and using it to generate Python package boilerplate.
- Adding Python code into the package and adding at least two useful tests.
- Creating an account on PyPI and uploading the Python package.
- Using Tox to test the project against multiple versions of Python.
- Implementing continuous integration: running tests via Travis CI and uploading documentation into Read the Docs.

You’ll walk out of this tutorial knowing how to package a Python project and with bonus material for making installable Django packages!
