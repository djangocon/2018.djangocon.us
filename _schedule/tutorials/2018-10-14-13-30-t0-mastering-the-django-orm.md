---
abstract: Django's ORM is probably its most-used but also least-understood component.
  This tutorial will try to fix that, by teaching you about best practices for using
  the ORM, advanced features you might not have known about, and technical details
  of how it all works under the hood.
accepted: true
category: tutorial
date: 2018-10-14 13:30:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /tutorial/mastering-the-django-orm/
presenters:
- bio: James is a philosopher turned web geek who fell in love with Django very early
    on. He picked up a commit bit while working at the Lawrence Journal-World and
    was Django's release manager for several years. Now he serves on Django's security
    team and the board of directors of the Django Software Foundation, and occasionally
    rants about interviewing and other issues in the culture of the tech community.
    He thinks you should be using Python 3.
  company: ''
  github: ''
  name: James Bennett
  photo_url: ''
  twitter: ubernostrum
  website: http://www.b-list.org/
published: true
room: Balboa I & II
sitemap: true
slides_url: ''
summary: ''
title: Mastering the Django ORM
track: t0
video_url: ''
---

This tutorial will cover the Django ORM in depth; it's designed to be
accessible to anyone who's worked through an introductory Django
tutorial, but intermediate/slightly more experienced users of Django
will probably get the most out of it.

This is a lecture-format tutorial, and will cover topics including:

* Elements of good database design: normalization and common patterns
* Best practices for model classes: how much business logic is too
  much, and how big should a model class get?
* "Thinking in ORM": how to approach situations where you know the SQL
  you'd like to execute, but aren't sure how to have the ORM do it
* When and how best to use custom managers and QuerySets
* Model inheritance and its pitfalls
* Implementing custom model field types and validation, and their
  advantages/disadvantages
* Working with users: Django's default User model, custom user models,
  and implementing different types of users
* Performing complex queries, and how to take advantage of annotation
  and aggregation features
* The SQL expression API: wrapping arbitrary SQL and database features
  with ORM constructs for easier queries
* Migrations: understanding exactly what's tracked, how the migration
  operations work, and when and how to use them manually
* Explanations of how the various layers and sub-components of the ORM
  work, and work together, to support each feature or API being
  discussed

Attendees will come away with a comprehensive knowledge of the Django
ORM, guidelines for when and how to use its advanced features and
customization points, and a deep understanding of how all its various
parts fit together.