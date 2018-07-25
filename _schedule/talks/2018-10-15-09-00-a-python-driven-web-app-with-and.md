---
abstract: 'Write simple Python scripts to generate dynamic web apps: this is the challenge
  we faced when designing its new machine-intelligence app framework. Discover how
  we solved this problem with Django, React and Websockets, while learning about the
  challenges of this architecture.'
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: Advanced
layout: session-details
permalink: /talk/a-python-driven-web-app-framework-with-django-channels-and-react/
presenters:
- bio: "Henry and Kendall have been developing Python and Django applications at Ayasdi for the past two years. Ayasdi is a machine intelligence company helping businesses understand their data and optimize their processes. Previously, Kendall was a co-organizer at the San Diego Python Users Group, and has given several Python-related workshops and tutorials. Henry has worked on Django projects for consulting firms and develops games in JavaScript on the side.
"
  company: Ayasdi
  github: ''
  name: Kendall Chuang
  photo_url: ''
  twitter: kendallchuang
  website: https://www.ayasdi.com/
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: A Python-Driven Web App Framework with Django, Channels, and React
track: ''
video_url: ''
---

At our company, we have faced a monumental task: designing a simple framework for data scientists to create powerful, dynamic web applications using only Python. In order to utilize the power of our machine-intelligence platform, we need to be able to quickly generate web applications to cater to different client solutions. We wanted to move standard data analysis workflows out of the command line, and into sleek, modern web apps that allow for dynamic construction of charts, tables, and other visualizations.

Our talk will focus on how we addressed this problem statement with the development of an application framework built on Django, Channels, and React. We picked these technologies for several reasons. Django is already an incredibly powerful web framework, and we realized very early on that we could use Django Models, Forms, and Form Validation to serve as the core of our backend. However, we opted to take a different approach than server-side rendering, and opted to utilize React on the frontend to display large trees of dynamically-generated components.

To connect these two segments, we decided to use websockets, via Django Channels. Our machine intelligence platform is incredibly powerful, and it allows us to perform tasks on big data with long-running jobs, such as topological modeling, auto-group generation, and feature selection. We use Channels as a way for the Django server to notify the React client on updates to these processes and to refresh different charts and tables.

Lastly, we designed our own Python SDK to allow data scientists to easily generate Python objects which are serialized and converted into React components. A developer using this framework doesn’t need to know Django, React, or Channels, but can utilize the power of all three in concert to quickly prototype powerful machine-learning applications with appealing user interfaces.

Throughout this talk, we will focus on how these technologies interact with one another, the benefits of these design-choices, and the challenges that we faced. The potential applications of this architecture extend far beyond our solutions, and it’s valuable for listeners to understand how Django can be used outside of traditional contexts. Hopefully this talk will inspire other Django developers to consider how their apps can utilize websockets, client-side rendering, and other web-development paradigms to address different and unique use-cases.
