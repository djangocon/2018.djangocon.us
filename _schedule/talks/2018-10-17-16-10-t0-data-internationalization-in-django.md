---
abstract: Django comes with well-established batteries included for translating an
  application. However, once you want your users to generate multi-lingual site contents
  Django is no longer able to help you. This will be an overview of libraries implementing
  translatable model fields and their pros and cons.
accepted: true
category: talk
date: 2018-10-17 16:10:00 -0500
difficulty: Beginner
layout: session-details
permalink: /talk/data-internationalization-in-django/
presenters:
- bio: I'm a software developer working with the web for more than ten years and with
    Python and Django for over four years. I work as a freelancer and maintain multiple
    open source projects. The most notable Django-based one is pretix, a full-featured
    and free conference ticketing software.
  company: rami.io Software development
  github: ''
  name: Raphael Michel
  photo_url: '/static/img/speakers/raphael-michel.jpg'
  twitter: _rami_
  website: https://www.raphaelmichel.de
published: true
room: 'Salon A-E'
sitemap: true
slides_url: ''
summary: ''
title: Data internationalization in Django
track: t0
video_url: ''
---

There is a multitude of options to translate database data in Django, for example django-parler, django-modeltranslation, django-nece, django-hvad, and django-i18nfield (which is my own). The interesting thing is that these libraries are not multiple implementations of the same thing, but they are all radically different in their design and there are good reasons for every one of them. The sometimes subtle differences might not be obvious to a beginner in the Django world. This talk will help them navigate through different solutions and make an informed decision.
