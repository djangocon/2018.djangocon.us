---
abstract: 'In this talk, we''ll see how we make a language agnostic backend, to serve
  our app in different languages, based on what language the client wants to communicate
  in.


  We''ll see how to support translation for static data and dynamic data, using various
  third-party services.'
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: All
layout: session-details
permalink: /talk/becoming-a-multilingual-superhero-in-django/
presenters:
- bio: "- CPython contributor and bug triage access on bugs.python.org\r\n- GSoC 2018\
    \ Mentor of Debian.\r\n- Mozilla Reps Mentor and contributor to Mozilla's GeckoEngine,\
    \ addons, remo projects.\r\n- One of the very few people to be featured in Mozilla\
    \ credits (http://mozilla.org/credits)\r\n- RGSoC Mentor in 2016.\r\n- Core-Organizer\
    \ for PyCon India 2016 & PyCon India 2017.\r\n\r\nBlog: http://www.SanyamKhurana.com/blog\
    \ and medium.com/@CuriousLearner"
  company: ''
  github: ''
  name: Sanyam Khurana
  photo_url: ''
  twitter: ErSanyamKhurana
  website: http://www.SanyamKhurana.com/blog
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Becoming a Multilingual SuperHero in Django
track: ''
video_url: ''
---

You have got this super awesome REST API served through Django/DRF based project and suddenly these requirements come in:

We need to have a local support for the Chinese language!

In case, you've not written your application with localization and internationalization in mind, then  "Boy! You're in danger! You should better start praying to almighty to give you strength and endurance to support yet another language in your app".

In this talk, we'll see how do we support localization and serve our app in different languages, based on what language the client wants to communicate in. As a backend, we should be language agnostic and allow all clients to communicate with us in one of the languages we support.

We'll see how to support translation for static data (using makemessages / compilemessages) and dynamic data, using various third-party services such as django-translations and transifex.

Here, static data is translations for all the fields, error messages etc. that the app already has and dynamic data is the custom data input by the user in the app.

This would enable you to have your admin panel, as well as RESTful APIs, served in different languages.
