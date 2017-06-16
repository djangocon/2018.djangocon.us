---
abstract: Considering running Django on Kubernetes, but not sure where to start?  This
  talk will take you through the layers and configuration required so that you can
  easily deploy orchestrated Django in containers yourself.
accepted: true
category: talk
date: 2017-08-15 16:10
layout: session-details
permalink: /talk/end-to-end-django-on-kubernetes/
presenters:
- bio: While Josh Berkus is well-known for his years of contributions to the PostgreSQL
    database system, today he works on new container stacks at Red Hat's Project Atomic.  A
    part-time potter, Josh resides in Portland Oregon with a librarian and a startlingly
    large black cat.
  company: Red Hat
  github: ''
  name: Josh Berkus
  photo_url: ''
  twitter: fuzzychef
  website: http://jberkus.github.io/
published: true
room: 'Ballrooms B and C'
sitemap: true
slides_url: ''
summary: ''
title: End-to-End Django on Kubernetes
track: ''
video_url: ''
---

Not only is Kubernetes a great way to deploy Django and all of its dependencies, it's actually the easiest way!  Really!

Deploying multi-layer applications with multiple dependencies is exactly what Kubernetes is designed to do.  You can replace pages of Django and PostgreSQL configuration templates with a simple Kubernetes config, OpenShift template or Helm chart, and then stand up the entire stack for your application in a single command.  In this presentation, we will walk you through the setup required to deploy and scale Django, including:

* Replicated PostgreSQL with persistent storage and automated failover
* Scalable Django application servers
* Front-ends and DNS routing

The templates covered in this presentation should be applicable to developing your own Kubernetes deployments, and the concepts will apply to anyone looking at any container orchestration platform.
