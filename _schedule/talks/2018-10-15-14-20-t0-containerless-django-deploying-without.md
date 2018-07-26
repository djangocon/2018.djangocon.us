---
abstract: 'Docker gets all the hype these days, but lots of large Django deployments
  do just fine without it. I''ll show you how to reliably get your app to production
  (without Docker) while still getting many of the same benefits: security, repeatability,
  and operational simplicity.'
accepted: true
category: talk
date: 2018-10-15 14:20:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/containerless-django-deploying-without-docker/
presenters:
- bio: "Peter is the founder of Lincoln Loop, one of the first companies to provide professional services for Django. He is constantly learning and is well-versed in many technical disciplines including devops, scaling, back-end, and front-end development. Peter is a frequent speaker at DjangoCon and has given talks at PyCon and SaltConf as well. In 2013 he co-authored the book High Performance Django, detailing the techniques used at Lincoln Loop to build high-traffic, scalable sites with Django. He has been interviewed about Lincoln Loop's remote work style by Wired and 37signals and been published on Forbes, FastCompany and TechRepublic among others.

Currently residing in Colorado, Peter enjoys a well balanced life with his wife and two children. Beyond technology, his passions include skiing and biking in the mountains near his home as well as the occasional surf trip south of the border."
  company: Lincoln Loop
  github: ''
  name: Peter Baumgartner
  photo_url: ''
  twitter: ipmb
  website: https://lincolnloop.com/team/peter-baumgartner/
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: 'Containerless Django: Deploying without Docker'
track: 't0'
video_url: ''
---

Docker or more generally, containers, are great for lots of use cases, but they don't come for free. Container runtimes, network virtualization, orchestration platforms, and registries are all added to the stack. Like all software, they bring their own bugs and operational burden with them. For most Django sites, containers are a heavyweight solution to a lightweight problem.

Despite the overhead, Docker gets a lot of things right. It makes it easy to generate an image of your application in a known state, test the image, pull the image down to your server, apply a specific configuration environment, and run it in a secure sandbox.

But guess what? We can do all that without Docker! Using mostly "boring" software that is already a part of your server or development environment. I'll walk you through each step of the pipeline and show you how to:

* Generate immutable deployment artifacts
* Test the artifact
* Deploy the artifact
* Sandbox your application to improve security
* Quickly rollback to a previous version
