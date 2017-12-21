---
layout: event
permalink: /schedule/presentation/demo/
description:
category: talk
date: 2016-07-17 09:00
datefriendly: Monday, 1:30pm-2:20pm
difficulty: Intermediate or Advanced
room: Room 1
title: "Websockets&#58; Intro to Messaging"
heading: Websockets&#58; Intro to Messaging
accepted: true

presenters: James Bennett
video_url: https://youtube.com/
slides_url: https://slideshare.com/

lead: Websockets (WS) are used across the web in this modern age, and they work great. The downside of WS is that the server needs to perpetually keep a connection open to the client if the client is available. I will be explaining the inner workings of WS as well as the different current implementations for Django. I will explain the idea behind Django-Channels and how it can be used.
---

Today’s web applications demand information to be delivered immediately after it is available. This is a huge step from where everything started, simple HTTP blocking requests. In order to solve this Server Side Events (SSE) and Websockets (WS) were created. SSE works from the server to the client only and it uses the HTTP protocol. WS is bidirectional and implements a layer on top of HTTP. WS started to get more momentum and now most of modern web browsers support it.

### The Problem

WS requires an open connection to the server. Frameworks like django are not build on this idea. This problem does not only depends on django, it also depends on the WSGI implementation and the web server used. Most of the WSGI implementations come from a synchronous nature which does not play that well with WS. This is in part because of the specifications and also because of the state of the web a few years ago. Each request happens in a thread and, usually, a specific number of threads are reserved for this purpose.

### The Solution

Basically, there are two general approaches to the problem:

The first one is to run another framework side by side Django which supports WS. There are different projects out there that tackles this approach. The idea is to run something like Node.js and let it handle all the WS communications. The second approach is to use Offloading on the Gateway Interface. The idea is to create threads to handle slow and/or simple tasks in the background. For this uWSGI has a particularly great implementation of this.

### Future Work

Django-Channels is changing adding a new layer in Django. Basically, this allows two loops to be running. One of the loops will handle HTTP and Websockets requests and the other one will run views, handlers and background tasks (synchronously). This is done by using ASGI, which is an asynchronous implementation of a Server Gateway Interface. It also uses workers for the background tasks as well as a backend to route requests to ASGI, e.g. Redis.

Currently Django-Channels can be used with Django 1.8+ as a stand alone app, with the 1.10 release Django-Channels will be merged into django’s core.

### Topics

* Websockets
    * What are they?
    * How do they work?
* WSGI
    * What does this has to do with websockets?
    * What does this has to do with django?
* Solutions with Django
    * Important concepts of websockets implementations with Django
    * Current projects to use
    * Pros and Cons
    * Task Queues and websockets - More Async
* Django Channels
    * Important concepts
    * The idea behind channels
    * How to start using channels
    * Pros and Cons
