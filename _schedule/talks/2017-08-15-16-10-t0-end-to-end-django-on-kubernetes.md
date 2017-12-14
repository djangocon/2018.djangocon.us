---
abstract: Considering running Django on Kubernetes, but not sure where to start? This
  talk will take you through the layers and configuration required so that you can
  easily deploy orchestrated Django in containers yourself.
accepted: true
category: talk
date: 2017-08-15 16:10:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talks/end-to-end-django-on-kubernetes/
presenters:

- bio: Frank is the Founder of REVSYS and President of the Django Software Foundation
  company: Revsys
  github: ''
  name: Frank Wiles
  photo_url: 'https://avatars1.githubusercontent.com/u/144159?v=4&s=400'
  twitter: fwiles
  website: http://www.revsys.com/

- bio: While Josh Berkus is well-known for his years of contributions to the PostgreSQL
    database system, today he works on new container stacks at Red Hat's Project Atomic. A
    part-time potter, Josh resides in Portland Oregon with a librarian and a startlingly
    large black cat.
  company: Red Hat
  github: ''
  name: Josh Berkus
  photo_url: 'https://www.gravatar.com/avatar/e49b70b058716dd9dea73a14a1d9856e?s=400'
  twitter: fuzzychef
  website: http://jberkus.github.io/
room: 'Ballrooms B and C'
sitemap: true
slides_url: 'http://www.revsys.com/talks/2017/django-on-kubernetes/'
title: End-to-End Django on Kubernetes
video_url: 'https://youtu.be/4LpaxvKsSlo'
---

Not only is Kubernetes a great way to deploy Django and all of its dependencies, it's actually the easiest way! Really!

Deploying multi-layer applications with multiple dependencies is exactly what Kubernetes is designed to do. You can replace pages of Django and PostgreSQL configuration templates with a simple Kubernetes config, OpenShift template or Helm chart, and then stand up the entire stack for your application in a single command. In this presentation, we will walk you through the setup required to deploy and scale Django, including:

* Replicated PostgreSQL with persistent storage and automated failover
* Scalable Django application servers
* Front-ends and DNS routing

The templates covered in this presentation should be applicable to developing your own Kubernetes deployments, and the concepts will apply to anyone looking at any container orchestration platform.
