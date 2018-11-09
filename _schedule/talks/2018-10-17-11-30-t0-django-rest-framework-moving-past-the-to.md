---
abstract: So you've made it through the Django REST Framework tutorial. How do you
  move from simple model serializers to making something front-end developers can
  actually use? I'll show how to leverage DRF to deliver different serializers and
  querysets to different users and actions to make happier users.
accepted: true
category: talk
date: 2018-10-17 11:30:00 -0500
difficulty: All
layout: session-details
permalink: /talk/django-rest-framework-moving-past-the-to/
presenters:
- bio: Drew is a software engineer currently residing in Huntsville, Alabama, USA.
    He has experience working in various industries including IoT, defense,
    advertising, and cloud hosting. He's built DRF APIs from scratch at two
    separate jobs. When not coding, he spends time with his wife, daughter,
    two dogs, and one cat as well as brewing beer, hiking, cooking, and
    watching various sports.
  company: Rackspace
  github: drewbrew
  name: Drew Winstel
  photo_url: '/static/img/speakers/drew-winstel.jpg'
  twitter: hops_and_smoke
  website: ''
published: true
room: 'Salon A-E'
sitemap: true
slides_url: 'https://docs.google.com/presentation/d/1DpngY037NZqq2aelnM4czjgWIUh20tF5Q4jp3yOOHuU/edit'
summary: ''
title: 'Django REST Framework: Moving Past the Tutorial to Production'
track: t0
video_url: 'https://youtu.be/-9WniUBt0fo'
---

So you've made your first attempt at creating a DRF API, but now you need to
figure out how to put the hair on the proverbial pony. You want to make things
easier on your client developers so they can get exactly what they need. I'll
walk through things that made our lives better developing a Django REST
Framework API serving a React frontend.

I'll include optimizations such as embedding related fields into serializers,
using different serializers for different users and use cases (HTTP methods),
and using DRF's `actions` decorator to provide easy access to related tasks.
I'll also touch on some third-party libraries that made life way easier, such
as `rest-framework-filters`, `django-rest-swagger`, and `django-simple-history`.
