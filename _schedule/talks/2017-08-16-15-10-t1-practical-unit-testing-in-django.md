---
abstract: |
    This talk will focus on practical mocking and other techniques in unit
    testing, covering:
    * why integration testing is not enough by itself
    * assertions over all code action
    * unit testing techniques
    * class based view methods
    * form methods
    * to mock the ORM or not to.
    * template unit testing
accepted: true
category: talk
date: 2017-08-16 15:10:00 -0500
difficulty: All
layout: session-details
permalink: /talks/practical-unit-testing-in-django/
presenters:
- bio: |
    Wayne Merry CPA
    Work Experience
    * Financial Controller HOPE worldwide
        Australia (Development and benevolence charity) 2013-2017 and consultant to
        HOPE worldwide Papua New Guinea
    * Investment manager Mimas Iapetus Trust
        2005-2012
    * General Manager Merry's Specialities 2003-2004
    * Trading Systems
        project lead Bourse Data 1998-2003
    * Industrial Systems manager United Weighing
        Australia 1995-1998

    Education

    * BA App Sci (Computer Technology) 1991-1994
        * Masters of Entrepreneurship and Innovation (Hnrs) 2004-2008
    * Masters of Professional Accounting and Masters of International Finance (2010-2012)

    Interests
    * Bush Search and Rescue 2009- (developed GPS field training software using Django, first used 2011, and still in use)
    * Third world charity program implementation, reporting and management
    * Christianity
    * I work too hard to listen to much music, but I love listing to techno while programming in Django!
  company: ''
  github: ''
  name: Wayne Merry
  photo_url: 'https://www.gravatar.com/avatar/4d045876e3ba9ac3944eda161397be7c?s=400'
  twitter: ''
  website: ''
room: 'Ballroom A'
sitemap: true
slides_url: ''
title: Practical Unit Testing in Django
video_url: 'https://youtu.be/Ue-a20-tKPI'
---

This talk is an opportunity for you to explore practical ways of improving the test code you write. Unit testing can be challenging, but with the right toolbox of techniques, it is much easier to write unit tests that not only enable high degrees of code coverage, but assurance on each action of your code.

Django provides an excellent test environment that facilitates testing across the whole of a project, however Django's documentation and many online examples focus on integration tests. Any typical use of the Django test client is an integration test. Tools such as selenium also provide a frame work for usability tests, functional tests or integration tests. What is missing in this is a close look at unit tests. It is difficult to obtain high code coverage with integration tests alone.

This talk will build on Daniel Davis' DjangoCon2015 talk "Why Unit Testing Doesn't Have To Be So Hard". That talk introduced the concept of using mocking to deal with the complexity of unit testing and gave a number of simple examples. In this talk, we will apply mocking, dummy objects and harnesses to unit test in the Django environment.

We will focus first on class based views. Django provides an extensive Generic Class Base View hierarchy of base classes and mixins. These define a series of methods that focus on various elements of the response process. For more complex applications, this system provides much of what is needed but often customizations are needed and these can take the form of subclasses overriding one or more methods, or perhaps mixins that are built to implement abstractions of these customizations.

In order to unit test these customizations, we want to place each individual method under test. To obtain strong assurance of code performance, we want to place under test each action of the code, plus its coupling with its base class(es). A test harness, mocks and dummy objects all assist in this process and we will explore examples of such. Mocks particularly facilitate our tests by us being able assert on what is passed on other method calls and on the super() call. Mixins are used to implement customization abstractions. Their methods can be unit tested making use of dummy subclasses.

Form classes also benefit from unit testing. Form classes may define clean methods for validation, and these clean methods can be called directly in unit tests for both valid and invalid data. Some modelform classes may implement business logic in their save() methods and these also highly benefit from unit testing.

Both forms and views often make use of the ORM. When performing integration testing, this often means setting up test fixtures, but for unit testing it might be much more efficient to mock out ORM calls such as filter(), all(), count(), etc. Sometimes code under test will chain these ORM functions and this also can be mocked.

We will then consider a more complex example of a view that makes use of an inlineformset. inlineformsets are more complex form objects, but various approaches can be used to unit test views that make use of formsets (along with unit tests of the formset itself).

We will close with some template unit testing.

The content of this talk is built on examples taken from real systems implementation. These should give many Django practitioners a boost in their day to day testing toolkit.
