---
abstract: Everyone knows testing is important, but it's frequently neglected because
  it can be simultaneously difficult and boring. This hands-on tutorial will increase
  attendees' test-writing skills. It will also discuss which tests are most important
  to write, and which can be safely skipped.
accepted: true
category: tutorial
date: 2016-07-18 09:00
layout: session-details
permalink: /tutorial/testing-your-django-project/
presenters:
- bio: I am a developer at New York-based fintech company Bond Street, and have worked
    with Django since 2009. In my spare time, I like skiing and hiking.
  company: Bond Street
  github: ''
  name: Katrina Ellison Geltman
  photo_url: ''
  twitter: ''
  website: http://katrinaeg.com
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Testing Your Django Project
track: ''
video_url: ''
---

## WHAT
Attendees will be able to quickly write effective tests for their Django projects.

## WHY
Everyone knows testing is important, but it's frequently neglected because it can be simultaneously difficult and boring. This hands-on tutorial will increase attendees' test-writing skills. It will also discuss which tests are most important to write, and which can be safely skipped.

## HOW
The tutorial is broken up into multiple sections, each covering particular types of tests. The first half of the session will cover unit tests and model tests. The second will cover integration tests, testing legacy code, and tools for running tests in production.

Each section contains multiple topics (see below for a complete outline), and each topic in the tutorial outline will be covered via several short examples. The examples build in complexity and explore different testing concepts. For instance, the first example in the "Mocks" section is "mocking an object". The second example is "setting custom values on a mock object". The third is "mocking an object with a foreign key".

Each example will be presented in two parts. First, the instructor will demonstrate how to write that type of test case. Immediately afterwards, attendees will work through a similar exercise on their own. The exercises are designed to be fast and straightforward, to help attendees gain "muscle memory" for writing tests.

These rapid-fire exercises will be interspersed with more in-depth discussions on when to use a particular technique. 

Intro (15m)

* Why write tests
* Types of tests
* Which tests to write

Basic Testing Logistics (5m)

* Anatomy of a test module
* How to run tests locally

Unit Tests (45m)

* What to test: functions and methods
* Basic assertions
* Setup and teardown
* Test case types (e.g. TestCase, SimpleTestCase)
* Stubs
* Mocks

Model Tests (20m)

* Basic CRUD (don't test it!)
* Advanced CRUD, e.g. custom managers

[10 minute break]

Integration and Functional Tests (30m)

* What to test: views, templates, or HTML? What if I am testing an API?
* Testing templates: the Django client
* Testing views: RequestFactory and APIRequestFactory
* Testing HTML: Selenium

Adding Tests to Legacy Code (20m)

* Testing functions that do more than one thing
* Testing an interface in order to change it

Running Production Tests (10m)

* Continuous integration tools: Travis, Jenkins, CircleCI, etc.

This tutorial will build on presentations like:

* https://2015.djangocon.us/schedule/presentation/60/ "Intro to Mocking: Why Unit Testing Doesn't Have To Be So Hard"
* https://2015.djangocon.us/schedule/presentation/44/ "Intro to Client-Side Testing"
* https://2015.djangocon.us/schedule/presentation/77/ "Performance Testing for Modern Apps"
* https://2017.djangocon.eu/schedule/django-and-the-testing-pyramid/ "Django and the Testing Pyramid"

The tutorial differs from earlier presentations in two ways: one, it takes a comprehensive approach, discussing overall strategies for testing your application, not just different ways for running a particular type of test. Two, it is hands on, giving attendees practice with testing techniques.

## WHO
This tutorial is designed for two groups of attendees. The first group includes people who would like to test their Django project, but don't know where to start. The second includes those who are comfortable with basic unit testing, but who sometimes skip tricky tests because it's too much effort to figure out how to write them.

Attendees should be familiar with basic Django project structure (models, views, and templates). No prior knowledge of testing is required.