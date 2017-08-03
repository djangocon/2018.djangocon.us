---
abstract: This tutorial provides a guided introduction to Channels, the code needed
  to be written to use it, and the infrastructure considerations involved in making
  channels work for you. By the end of the tutorial you will have participated in
  creating a fully-interactive web site.
accepted: true
category: tutorial
date: 2017-08-13 13:30:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /tutorials/don-t-touch-that-dial-an-introduction-to-channels/
presenters:
- bio: |
    Ken Whitesell is a software developer with more than 35 years experience
    scattered among just about any platform you care to name. He has been
    working  with Django for about 5 years now, mostly on very narrowly-targeted
    internal applications for the companies in which he has been employed.
    Ken is currently an Assistant Manager, Systems Development with WSP,
    in the GeoSpatial and Advanced Technology group, working on projects
    involving Vehicle Fleet Management and Traffic Control systems.
  company: WSP
  github: ''
  name: Ken Whitesell
  photo_url: https://pbs.twimg.com/profile_images/1825623146/Self_400x400.jpg
  twitter: KenWhitesell
  website: ''
room: Ballroom B
sitemap: true
slides_url: ''
title: Don't Touch That Dial! An Introduction to Channels
video_url: ''
---

This tutorial will provide a hands-on guided introduction to using Channels in your Django web site to provide bi-directional communications and background processing. Topics will include common use-cases, specific functional and working code, and some implementation and integration details. There will also be some time spent discussing the general history of the internet and the technologies involved, providing the attendees with a deeper understanding of how and why we have gotten to this point.

### Session Outline

1. An overview of TCP/IP and the HTTP protocol
    1. TCP Sockets
    1. HTTP Connections
1. The limitations of an HTTP Connection
    1. The tradeoffs of persistent vs intermittent connections
    1. Options for getting past those limits
1. How the Web is changing
    1. What the web used to be
    1. What the web is becoming
1. A web architecture
    1. NGINX
    1. uWSGI
    1. Django
    1. Redis
    1. Daphne
1. Testing techniques
1. Inter-Channel communication
1. Chat! The simplest Channels-based app
1. Security
    1. Encryption
    1. Authentication
    1. Authorization
1. Background processing
1. Asynchronous communications
1. The completed site

Attendees will not be required to provide their own installations. However, each attendee should have a system capable of accessing a host on the internet through SSH in order to participate in the exercises. Each attendee will be given access to a pre-configured virtual machine containing all the code and other materials used during the session.
A reasonable degree of knowledge of common web technologies (HTML, CSS, JavaScript) will be assumed. The pages, templates, scripts, and resources will be provided - the attendees will not be creating them on their own. However, it may be difficult for an attendee to follow the discussion and examples if they don't have any familiarity with those items.
Attendees should also be reasonably comfortable with using a command-line interface and most of the common commands (e.g. ls, cp, mv, cd, diff, grep, vi or nano). Knowledge of git is helpful but not required. Again, the specific commands being used will be provided cookbook- style, but knowledge of what those commands are doing will enhance the experience and enable the attendee to explore the subject material beyond what will be presented.
