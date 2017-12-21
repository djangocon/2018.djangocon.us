---
abstract: Save time and money by running Django without any permanent infrastructure!
  This talk will explain the advantages of going server-less, and teach you how to
  migrate existing Django applications to AWS Lamdba and how to implement common Django
  patterns in an event-driven, server-less architecture.
accepted: true
category: talk
date: 2017-08-15 11:30:00 -0500
difficulty: Beginner
layout: session-details
permalink: /talks/serverless-django/
presenters:
- bio: "[Rich Jones](https://github.com/Miserlou) is a consummate hacker. He is the\
    \ founder and CTO of [Gun.io](https://gun.io) and the author of the [Zappa](https://blog.zappa.io)\
    \ framework.\r\n\r\nCome say hi!"
  company: Gun.io
  github: Miserlou
  name: Rich Jones
  photo_url: https://avatars1.githubusercontent.com/u/139987?v=4&s=400
  twitter: GUNdotIO
  website: https://github.com/Miserlou
room: 'Ballroom A'
sitemap: true
slides_url: 'https://cdn.rawgit.com/Miserlou/Talks/8f7cd4b7/zappa-djangocon-2017/djangocon.html#0'
title: Serverless Django
video_url: 'https://youtu.be/ixRZfVBn_A8'
---

You've probably heard the buzzword by now - "serverless". It's a new type of application architecture where traditional web servers are replaced by ephemeral cloud services. But what does it mean for the average Django user? Hint: lower costs, more scalability, more capabilities and less ops tasks to worry about!

First, this talk will explain what "serverless" _really_ means for you, and provide an overview the advantages and disadvantages of event-driven server-less architectures.

Next, we'll demonstrate how easy it is to migrate your existing Django CMS application to run on AWS Lambda by using the Zappa framework, including some real-world issues you might bump into.

Then, we'll show how to implement some of the most common Django patterns as part of a server-less architecture - uploaded avatar image processing, batch and timed sending of email, and long running tasks like statistical aggregation.

Finally, we'll show how to scale up your server-less application to trillions of events per year by distributing your app to dozens of data centers all around the globe, and do an ultimate cost analysis of your new system.

You'll leave with new ideas on how to save money and stress on your existing applications and cool new ways to implement features in your next app!
