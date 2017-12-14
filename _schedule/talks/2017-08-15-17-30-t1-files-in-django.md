---
abstract: "Serving files is one of the most basic tasks of any web application. Since\
  \ 1.0 Django has provided an API to abstract over the potpourri of cloud and other\
  \ types of storage providers. We\u2019ll dive into the API, go over some recommended\
  \ configurations and implement a novel storage engine together."
accepted: true
category: talk
date: 2017-08-15 17:30:00 -0500
difficulty: Beginner
layout: session-details
permalink: /talks/files-in-django/
presenters:
- bio: ''
  company: ''
  github: ''
  name: Josh Schneier
  photo_url: 'https://www.gravatar.com/avatar/3df94fda74c1265f3a85126231ba54b7?s=400'
  twitter: ''
  website: ''
room: 'Ballroom A'
sitemap: true
slides_url: ''
title: Files in Django
video_url: 'https://youtu.be/RfTNBLiWjMI'
---

One of the most confusing parts of Django for newcomers (and some old hands alike!) is the handling of files. Among the 10+ settings, static vs user uploaded distinction, and plethora of deployment options it's no wonder that many people end up cargo-culting their production settings.

1. The API overview
     * Short introduction
     * Go over the difference between static & media files
     * Run through the File abstraction and the various settings
     * Django Storage API, collectstatic etc
2.  Production & Development configuration
     * Whitenoise/dj-static/Nginx for static files
     * Cloud storage providers for media & static files (S3 etc, mention some popular libraries such as django-storages)
     * CDNs
3.  Implement a storage engine together & the future
     * Implementation - practicing what we just learned to solidify understanding
     * Closing remarks and mention possible future Django developments
