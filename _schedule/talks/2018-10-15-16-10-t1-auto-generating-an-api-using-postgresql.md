---
abstract: We have an API whose database schema changes constantly with no need for
  changes to our code that exposes the data. This is an extremely powerful (but quite
  possibly a bad) idea. See how we do it!
accepted: true
category: talk
date: 2018-10-15 16:10:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/auto-generating-an-api-using-postgresql/
presenters:
- bio: "Mjumbe has been developing civic technology since 2010. He endeavors to use\
    \ technology to build the capacity of individuals and communities to shape their\
    \ cities, their neighborhoods, and their own lives.\nPrior to joining Stepwise\
    \ (n\xE9e FixList) in 2016, Mjumbe served as a Digital Services Architect at the\
    \ City of Philadelphia's Office of Open Data and Digital Transformation. In 2012,\
    \ he started at OpenPlans, where he worked on projects that encouraged city residents\
    \ to get involved in planning for the future of their cities. In 2011, he was\
    \ an inaugural Code for America Fellow.\nThe perspective of technology as a means\
    \ for social empowerment guides Mjumbe's professional and extracurricular development.\
    \ He volunteers with Coded by Kids as an instructor and a board member, and is\
    \ a member of the planning committee for the International Conference on Appropriate\
    \ Technology. "
  company: Stepwise Real Estate Analytics
  github: ''
  name: Mjumbe Poe
  photo_url: '/static/img/speakers/mjumbe-poe.jpg'
  twitter: mjumbewu
  website: ''
published: true
room: 'Salon F-H'
sitemap: true
slides_url: ''
summary: ''
title: Auto-generating an API using PostgreSQL, Django, and Django REST Framework
track: t1
video_url: ''
---

We have an API whose database schema changes constantly with no need for changes to our code that exposes the data. This is an extremely powerful (but quite possibly a bad) idea. See how we do it!

In this talk I'll go over:

* Introspecting the database
* Dynamically generating Django models
* Dynamically generating a DRF API
* Testing against read-only databases
* How it's all a powerful (but maybe a bad) idea
