---
abstract: Django lets you to use apps installed with `pip`, but have you ever wanted
  to package and distribute your own apps? In this talk, you will learn about creating
  a Django app and packaging it for distribution on Warehouse (the new PyPI). The
  talk will also discuss some best practices for packaging.
accepted: true
category: talk
date: 2018-10-15 17:00:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/packaging-django-apps-for-distribution/
presenters:
- bio: Laura Hampton is a Solutions Engineer at Datadog, and lives in New York City.
  company: ''
  github: ''
  name: 'Laura Hampton '
  photo_url: '/static/img/speakers/laura-hampton.jpg'
  twitter: 'incunabulista '
  website: http://www.laura-hampton.com
published: true
room: 'Salon A-E'
sitemap: true
slides_url: ''
summary: ''
title: Packaging Django Apps for Distribution on PyPI
track: t0
video_url: ''
---

One of the strengths of Django is that it allows you to use apps created by other developers, so you don't have to spend time rewriting something that
someone else has already written. However, creating Python packages for distribution via the Python Package Index is a process that is unfamiliar to most developers. In this talk, you will learn about creating a reusable Django app. The talk will cover how a Django app differs from a package like requests, and how an app interacts with models and URLs in an existing project.

While the talk will include a discussion of how to upload a Django app to PyPI, the parts that discuss how to make reusable  Django apps will be useful to developers who are working at organizations where they may not be able to open-source their code.

This talk is intended for Django developers who have some familiarity with how Django works, and an interest in code reuse and packaging.

Outline

- Introduction (3 min)
    - the difference between a Django app and a utility package (like Requests)
    - the relationship between a Django project and an app
- How the packaging considerations for a Django app differ from a utility package (4 min)
    - `requirements.txt` versus `setup.py`: how they are different
- How a packaged Django app is structured (3 min)
    - including documentation in the package
- Creating a Django app for packaging (10 min)
    - considerations for making reusable Django apps
    - interacting with existing models and data
    - interacting with URLs
- Creating a source archive and wheel and uploading it with twine (5 min)
    - use `test.pypi.org` before uploading your package to `pypi.org`
