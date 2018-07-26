---
abstract: This talk is a deep dive on authentication in REST Framework. We'll review
  the pros/cons of the 4 built-in options, discuss popular 3rd party packages, and
  implement a working solution from scratch with a custom user model, tokens, user
  registration, social auth, and more.
accepted: true
category: talk
date: 2018-10-16 11:30:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/finally-understand-authentication-in-django-rest-framework/
presenters:
- bio: 'William Vincent is a freelance software developer and the author of two books:
    [Django for Beginners](https://djangoforbeginners.com/) and [REST APIs with Django](https://restapiswithdjango.com/).
    He came to coding later in life (30s!) after working as an early employee at Quizlet.
    Since then he has worked at multiple early-stage startups in the Boston area and
    taught computer science at Williams College. He writes regularly at wsvincent.com.'
  company: ''
  github: ''
  name: William S. Vincent
  photo_url: ''
  twitter: wsv3000
  website: https://wsvincent.com/
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: 'Finally Understand Authentication in Django REST Framework '
track: 't1'
video_url: ''
---

Traditional Django handles user authentication for us. REST Framework? Not so much. The abundance of choice is overwhelming and typically THE biggest obstacle for newcomers.

This talk is a deep dive on authentication in Django REST Framework. We'll start with an overview of HTTP and REST APIs before demonstrating how to implement the 4 built-in auth modes and their respective pros/cons. Special attention will be paid to common gotchas such as, Why do I need "both" TokenAuth and SessionAuth? What are JWTs?

Next we'll implement a real-world REST auth setup that includes user registration, password reset/confirm, social auth, and endpoints for sign up, log in, and log out. The third-party packages `django-rest-auth` and `django-allauth` will be used .

By the end of the talk attendees will understand the basics of REST authentication, the tradeoffs involved, and walk away with a working implementation to jumpstart their future projects.
