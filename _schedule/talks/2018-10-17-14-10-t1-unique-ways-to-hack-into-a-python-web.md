---
abstract: "Microservices are taking over the world. Rest-framework is accelerating\
  \ this because of its ease and flexibility. \nDevelopers often use and develop REST-based\
  \ applications because it's exciting to work with. But, they forget about security\
  \ which leads to compromised and exploited applications."
accepted: true
category: talk
date: 2018-10-17 14:10:00 -0500
difficulty: All
layout: session-details
permalink: /talk/unique-ways-to-hack-into-a-python-web/
presenters:
- bio: 'I work at an Application Security company (we45) and have a unique perspective
    of developing secure and deliberately insecure apps in Python and NodeJS. I have
    contributed to the development of several applications that have been used for
    Capture the Flag Contests inside and outside the organization. In addition, I
    have extensive experience with integrating scanners, SAST and DAST toolsets into
    our Application Vulnerability Correlation and Aggregation product.

    I have over 7 years of development experience and continue to work as a full-stack
    developer. '
  company: we45
  github: ''
  name: Tilak T
  photo_url: ''
  twitter: ti1lakt
  website: ''
published: true
room: 'Salon F-H'
sitemap: true
slides_url: ''
summary: ''
title: Unique ways to Hack into a Python Web Service
track: t1
video_url: ''
---

Python covers a significant portion of the present day Web services landscape because of frameworks like Django, Flask, CherryPy etc. Many Highly Scalable services are built on one or more of these frameworks.

However, there is a perception among developers that these frameworks protected all classes of Web attacks and the OWASP Top 10 vulnerabilities. This is because of the inherent middleware that has battle-tested controls against some common vulnerabilities like CSRF, SQL Injection, and XSS. However, I have observed that many Python devs do not watch out for lesser-known vulnerabilities that seem to be rife in many Python Web Apps. For instance, in more recent security tests against Python Web Services that our team executes, I find that vulnerabilities like Insecure Deserialization, XML External Entities, Server-Side Template Injection and Authorization Flaws are quite prevalent.

As a developer (largely of Python Web Apps), I find that there are some simple steps that engineering teams can take towards finding and fixing such vulnerabilities with Python Web Services built on Django and Flask. My talk is meant to be a holistic perspective on finding and fixing some uncommon flaws in Python Web Apps. The talk will be replete with multiple demos, anecdotes, and examples of secure and insecure code in Python. I will also delve into SAST and DAST techniques (AST and ZAP Custom Scripts) to identify such flaws in python web applications.

The example repository will be available on GitHub for the community to use.
