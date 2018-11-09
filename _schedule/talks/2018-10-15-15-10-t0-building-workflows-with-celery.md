---
abstract: 'Task Queues are applications which help perform tasks asynchronously with
  the help of worker threads.

  Celery is one of the most robust task queues fully compatible with Django.

  Let''s see how Celery works and how can we use it to build extensive workflows to
  power robust applications.'
accepted: true
category: talk
date: 2018-10-15 15:10:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/building-workflows-with-celery/
presenters:
- bio: "Josue Balandrano Coronel works at the Texas Advanced Computing Center as a\
    \ Software Engineer helping build Science Gateways. Josue has been a\
    \ DjangoCon US and PEARC speaker. He is also passionate about complexity and\
    \ how to remove complexity from software development. Josue is a Celery core\
    \ contributor."
  company: Texas Advanced Computing Center
  github: ''
  name: Josue Balandrano Coronel
  photo_url: '/static/img/speakers/josue-balandrano-coronel.jpg'
  twitter: rmcomplexity
  website: https://rmcomplexity.com
published: true
room: 'Salon A-E'
sitemap: true
slides_url: 'https://docs.google.com/presentation/d/1muDz5nzOTbXTi8rQX4n7B-8bQOMPUry5nJK0xfY8jWM/edit'
summary: ''
title: Building Workflows With Celery
track: t0
video_url: 'https://youtu.be/8YLeWxLtVgo'
---

Task Queues is a topic which most developers will eventually have to dive into, specially in today's web development world.
The idea is really simple: whenever one has any functionality which might take too long to perform,
one can spawn a process which will take care of this functionality without having to block the app's main loop.
A task queue will use worker processes to execute these long-running tasks and the user does not have to wait
until the task is done. Instead, an acknowledged message is presented to de user while the task is executed in the background.
This concept is really important when building web applications.
HTTP Requests have timeout and making the user wait a long time for something to finish is not a good user experience practice.
Usually, these tasks are used in groups creating a workflow where the work is distributed into smaller tasks.

Celery is usually the first project one encounters when searching for task queues and Django.
I have been using Celery for over four years. The Celery project is one of the most robust
task queues out there. It is certainly not the only task queue.
And, it can be difficult planning the correct architecture for a specific workflow.
This talk will explain enough of Celery's basics to understand how to build workflows with Celery.

Building workflows with Celery is never straight forward. This is mainly because Celery offers the
building blocks to build workflows but it tries to move out of the way.
By not being too intrusive, Celery allows building complex workflows.
I will explain common patters and tips to successfully use celery to build workflow of different complexities.

Outline
========


1. Introduction

   1. Basics of Celery's architecture
   2. Caveats when using Celery
2. Workflows

   1. What are Workflows and why use them
   2. Celery's building blocks
   3. Common workflows techniques
   4. Real World Example

3. Tips and Tricks

   1. Caveats
   2. Testing
   3. Local development
   4. Using Celery in production
