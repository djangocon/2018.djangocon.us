---
abstract: There comes a point in the life of most successful code where you've outgrown
  a single machine, and you run headfirst into distributed systems design. Learn how
  Django and app code are best used across multiple servers, strategies to best handle
  your data, and horror stories of bad decisions.
accepted: true
category: talk
date: 2017-08-16 11:30:00 -0500
difficulty: All
layout: session-details
permalink: /talks/taking-django-distributed/
presenters:
- bio: Andrew is a Django core developer and Senior Software Engineer at Eventbrite,
    and focuses mainly on software and systems architecture, data storage, and deployment.
    He's helped write the Django Migrations framework and Django Channels, as well
    as a lot of other, far less useful open-source code. In his spare time, he enjoys
    piloting light aircraft, developing video games, archery, cheese, and visiting
    mountainous and snowy areas.
  company: ''
  github: ''
  name: Andrew Godwin
  photo_url: 'https://www.gravatar.com/avatar/077e9a0cb34fa3eba2699240c9509717?s=400'
  twitter: andrewgodwin
  website: http://www.aeracode.org
room: 'Ballrooms B and C'
sitemap: true
slides_url: 'https://speakerdeck.com/andrewgodwin/taking-django-distributed'
title: Taking Django Distributed
video_url: ''
---

While some code happily lives on a single server forever, most big projects will have to cross the boundary into running both their application and storing their data across multiple systems. The basic strategies are well-known, but we'll take a look at what to do as you cross the painful threshold where you can't run your app as a monolith or store everything on a single database server.

Among other things, we'll look at how to split up business logic and application code to run on different servers, how to scale to handle different kinds of web traffic (read-heavy, write-heavy, and long-connections/WebSockets), when and how to make parts of your code not run inline with HTTP processing, strategies for storing data across multiple machines, and how to structure your engineering team to best cope with all these changes.

We'll also look at a few apparently innocuous decisions and the spiral of bad performance they lead to, and how to recognise some of these common problems so you can avoid them yourself in future.
