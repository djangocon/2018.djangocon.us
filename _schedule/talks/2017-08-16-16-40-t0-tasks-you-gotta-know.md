---
abstract: |
    How long is it acceptable to keep users waiting for a response? The ideal
    answer is: the minimum their internet connection allows. This means server process
    time should be close as possible to zero. In this talk you will learn what are async
    tasks, what they can do and what are the good practices.
accepted: true
category: talk
date: 2017-08-16 16:40:00 -0500
difficulty: All
layout: session-details
permalink: /talks/tasks-you-gotta-know-how-to-run-em-you-gotta-know-how-to-safe-em/
presenters:
- bio: |
    I'm a Python/Django developer from Brazil. I work in a Django shop I started
    with a couple friends and I'm passionate about developing beautiful code. I'm
    interested in all kinds of programming languages, their communities and open source.
    I believe simple is better than complex, and that this should be a mantra for
    most things in life. I value human relationships and the way we, as a society,
    interact with the place we live in. For that, I recognize the use of bicycles
    for transportation and the use of public space as a priority to build healthy
    cities.
  company: Vinta Software
  github: ''
  name: Filipe Ximenes
  photo_url: 'https://www.gravatar.com/avatar/ce373a3291defccc69a1392feb587f17?s=400'
  twitter: xima
  website: https://www.vinta.com.br/blog/author/filipeximenes/
room: 'Ballrooms B and C'
sitemap: true
slides_url: 'https://speakerdeck.com/filipeximenes/tasks-you-gotta-know-how-to-run-em'
title: 'Tasks: you gotta know how to run ''em, you gotta know how to safe'' em'
video_url: 'https://youtu.be/XjzyOyLbvN8'
---

Web developers often find themselves in situations where server processing takes longer than a user would accept. One very common situation is when sending emails. Although simple and relatively quick task, it requires the communication with an external service. In this situation, it’s not possible to foresee how long that service will take to answer. Not to mention the many unexpected situations that can arise, such as errors and bugs. The solution to this problem is to delegate long lasting tasks while responding quickly to the user. This is the point where we need async tasks. There are some tools available that can assist in this job. In this talk, you will learn about the concepts, caveats and best practices for when developing async tasks. For this, I will use Python's most popular tool for the task: Celery.

Rundown:

- Setting the context (~3 min)
- The architecture (~3 min)
	- Brokers
	- Workers
- Use cases (~2 min)
	- External calls
	- Long computations
	- Data caching
- Tools available (~1 min)
- Celery (~16 min)
	- Callbacks
	- Canvas
	- Logging
	- Retrying
	- Monitoring
	- Tests and debugging
