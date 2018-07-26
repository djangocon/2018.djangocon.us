---
abstract: You may have heard of edX.org, the MOOC site created by Harvard and MIT,
  but did you know that the software powering this site is open source and built using
  Django? This technical deep dive will explore how this modern web application was
  created in a scalable way to be able to serve 35M users.
accepted: true
category: talk
date: 2018-10-17 11:30:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/anatomy-of-open-edx-a-modern-online-over/
presenters:
- bio: 'My first exposure to Python was in 2003 when I began using the Plone CMS,
    which is based on Zope. This ignited a lifelong love affair with Python. In 2004,
    I founded Jazkarta, a Boston-based web consultancy to build websites for organizations
    like Harvard, Oxfam and Smithsonian. Back when PaaS''es were sexy, I founded DjangoZoom
    to make it easy to get your Django apps running in the cloud. Now I''m leading
    the 20 person distributed team at Appsembler, whose mission is to empower trainers
    and educators to create delightful online learning experiences. '
  company: Appsembler
  github: ''
  name: Nate Aune
  photo_url: ''
  twitter: natea
  website: https://appsembler.com/blog
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Anatomy of Open edX - a modern online learning platform serving over 35 million
  users
track: t2
video_url: ''
---

What does it take to build a web application that can serve millions of concurrent users? This talk will dissect Open edX, the open source online learning platform that powers edX.org and hundreds of other sites around the world.

Open edX is written in Django but relies on a slew of other software to work at scale. We’ll break down the components of the entire software architecture, and explain how each component is used. This will give attendees some insights into how they might architect their web application if they’re building software to serve a large audience.

We’ll discuss how Open edX utilizes both MySQL and MongoDB as data stores and why it uses MySQL for student data and MongoDB for course data. We’ll describe the queing architecture of Celery and RabbitMQ to process background jobs, and Hadoop for processing terabytes of learner analytics data.

DevOps enthusiasts will not be disappointed as we’ll go into the use of Ansible and Terraform for deploying the entire suite of software in a consistent and repeatable way up to popular cloud providers such as AWS, Google Cloud and Azure.

What will attendees learn? The attendees will get a close look at a modern Django-based web application to see how it’s architected, and come away with a better understanding of design decisions when building a web application that needs to serve 35M users from every country in the world. Attendees will also be equipped with the knowledge to run Open edX on their laptop or in the cloud, if they want to explore the software further.