---
abstract: Interested in container technologies? Heard all the buzz about Kubernetes?
  In this talk you will get an introduction to the fundamental concepts and terminology
  of Kubernetes, guidelines for building images for a Django application, deploy it
  and make it available.
accepted: true
category: talk
date: 2018-10-16 16:10:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/fundamentals-of-kubernetes-for-django/
presenters:
- bio: Graham is the author of mod_wsgi, the Apache module for hosting of Python web
    applications using the WSGI interface, and wrapt a Python package for decorators
    and monkey patching. He has a keen interest in Docker and Platform as a Service
    (PaaS) technologies. He is currently a developer advocate for OpenShift at Red
    Hat.
  company: Red Hat
  github: ''
  name: Graham Dumpleton
  photo_url: '/static/img/speakers/graham-dumpleton.jpg'
  twitter: GrahamDumpleton
  website: http://blog.dscpl.com.au
published: true
room: 'Salon A-E'
sitemap: true
slides_url: ''
summary: ''
title: Fundamentals of Kubernetes for Django developers
track: t0
video_url: ''
---

A hot topic in recent years is running applications in containers. Tools such as ``docker`` and ``rkt`` have made deployment of applications using Linux containers easier, but they do not alone provide everything that is needed to easily manage many applications, or run containers at scale across a cluster of machines.

In this talk you will learn about the fundamental concepts and terminology of Kubernetes and why it is emerging as the de-facto standard for container orchestration and scheduling.

The talk will step through how to deploy to Kubernetes a Python web application, implemented using Django, as a way of seeing what happens under the covers when you do so.

Topics which will be covered to illustrate how Kubernetes works will include:

* What are containers and pods.
* Accessing pods for an application via a service.
* Scaling up applications to many instances.
* Automatic recovery from application failure.
* Exposing a web application to the public.
* Building images targeting Kubernetes.
* Application lifecycle management.
* Monitoring health of an application.
* Security and controlling access.

Kubernetes is a tool for IT operations. It implements what is regarded as a Container as a Service (CaaS). You can use it to host an application packaged up in a pre-existing application image, but does not help you with building that image. In some respects Kubernetes can be viewed as like the Linux kernel, you wouldn't try and deploy it yourself from scratch, instead you would use a packaged distribution.

This talk will also touch on different Kubernetes distributions such as vendor distributions from Heptio, and OpenShift from Red Hat, as well as Kubernetes services such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service (EKS) and Azure Kubernetes Service (AKS). Examples of how these distributions and service offerings around Kubernetes bundle in additional functionality, including integrated routing, metrics, logging and Platform as a Service (PaaS) functionality, in order to provide a better developer centric experience will also be discussed.
