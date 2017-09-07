---
abstract: The focus of this talk is around the topic of asynchrony in Django applications.
  There's been a lot of interest in frameworks like meteorjs that enable developers
  to build highly interactive applications. This talk will teach you how to achieve
  the same result with a stock Django installation.
accepted: true
category: talk
date: 2017-08-16 14:20:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talks/butter-smooth-interactive-applications-with-django-and-websockets/
presenters:
- bio: "I'm a self-taught hacker with 10+ years of experience. I've been in the data\
    \ space my entire career, first with data pipelines for protein analysis and then\
    \ for the web/e-commerce verticals. I'm passionate about everything data: collection,\
    \ storage, analysis and visualization.\r\n\r\nMy free Advanced SQL guide is read\
    \ by 50K+ readers every month.\r\n\r\nI'm a frequent conference speaker (spoken\
    \ at PyCon before), but this is my first DjangoCon.\r\n\r\nI live in Vancouver,\
    \ BC.\r\n\r\n10+ years python (Django, Scrapy, SQLAlchemy)\r\n5+ years SQL (Postgres\
    \ and Redshift)\r\n5+ years AWS (attended re:invent multiple times)\r\n3+ years\
    \ Elasticsearch \r\n2+ years Javascript / Node.js\r\n"
  company: Silota
  github: ''
  name: Ganesh Swami
  photo_url: https://pbs.twimg.com/profile_images/592806614597554177/bwpNUYgA_400x400.jpg
  twitter: gane5h
  website: http://www.silota.com
room: 'Ballroom A'
sitemap: true
slides_url: ''
title: Butter smooth, interactive applications with Django and Websockets
video_url: 'https://youtu.be/BRCx6lSA0fM'
---

Web applications have changed significantly over the years – from simple static pages, to sprinkling interactiveness with JQuery/AJAX, to full dynamic single page apps. Through each evolution, we’re adding more complexity, more data and more asynchronous behavior to our applications.

In this new world, where does the synchronous nature of Django's request-response cycle fit in?

My talk will focus on the topics around asynchronous Django applications. I'll be sharing some lessons we learnt while building and scaling an interactive web application within the confines of Django and django-channels.

This topic is interesting because there's been a lot of interest with meteor-like frameworks that have synchronized state between the frontend and backend. My intention is to show the audience that you can accomplish the same end-result with Django, without the need to learn and deploy a brand new framework.

An outline I have in mind:

* What does asynchrony mean, and why you need it.
* Traditional methods of achieving asynchrony (delayed jobs using worker queues like celery, long-polling for messaging, etc.)
* Why django-channels changes the game.
* How to architect your state.
* What are the available options for deployment.
* Gotchas, and what to do when things go wrong.

Just a basic knowledge of Django is required, as the topics are transferable to other frameworks. We did not have to monkey-patch any of the drivers to achieve asynchrony, so what you'll learn at my talk will apply cleanly to a stock Django.
