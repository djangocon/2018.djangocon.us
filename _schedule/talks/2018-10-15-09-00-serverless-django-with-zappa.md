---
abstract: "You've finally built out a project that you'd like to share with the world.\
  \ That's amazing! Where do you host the thing? Enter Zappa. This framework on top\
  \ of AWS Lambda will allow you to bring your application to the masses with a light\
  \ configuration and, if you're lucky, a light bottom line."
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/serverless-django-with-zappa/
presenters:
- bio: "I like leveraging software development skills for good. During my short career I've had a chance to work in the fields of counterterrorism, cancer research, and education. I'm an unrepentant foodie'read more at the upcoming [Piquant](https://piquantmag.com/about) if you like. [I made an album](https://www.littleleviathan.com) once and [I make fashion and portraiture photography](https://www.danehillard.com) here and there."
  company: ITHAKA
  github: ''
  name: Dane Hillard
  photo_url: ''
  twitter: easyaspython
  website: https://easyaspython.com
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Serverless Django with Zappa
track: ''
video_url: ''
---

A common set of considerations when planning to release a new application are around hosting and resources:

1. Which platforms will support my app?
1. What OS should I use?
1. What WSGI server should I use?
1. How much memory and CPU do I need?

Zappa, a framework for running serverless WSGI applications on top of AWS Lambda, can help address these and other questions around application deployment. With some configuration (as code), Zappa can get you up and running quickly, letting you focus on developing the application instead of the infrastructure.

In this talk we'll go through some of these kinds of questions to see how they might be answered in traditional solutions and then see how Zappa handles them. We'll also talk about a few specific configuration options for handling SSL certificates and running Django commands on the Zappa-deployed application.
