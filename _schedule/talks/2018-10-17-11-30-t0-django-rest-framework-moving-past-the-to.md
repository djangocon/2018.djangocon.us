---
abstract: So you've made it through the Django REST Framework tutorial. How do you
  move from simple model serializers to making something front-end developers can
  actually use? I'll show how to leverage DRF to deliver different serializers and
  querysets to different users and actions to make happier users.
accepted: true
category: talk
date: 2018-10-17 11:30:00 -0500
difficulty: All
layout: session-details
permalink: /talk/django-rest-framework-moving-past-the-to/
presenters:
- bio: Drew is a software engineer currently Huntsville, Alabama, USA. He has experience
    working in various industries including IoT, defense, advertising, and cloud hosting.
    He's built DRF APIs from scratch at two separate jobs.  When not coding, he spends
    time with his wife, daughter, two dogs, and one cat as well as brewing beer, hiking,
    cooking, and watching various sports.
  company: Rackspace
  github: ''
  name: Drew Winstel
  photo_url: ''
  twitter: hops_and_smoke
  website: ''
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: 'Django REST Framework: Moving Past the Tutorial to Production'
track: t0
video_url: ''
---

- What: I'll walk through things that made our lives better developing a Django REST Framework API serving a React frontend
- Why: You've made your first stab at creating a DRF API, but now you need to figure out how to put the hair on the proverbial pony. You want to make things easier on your client developers so they can get exactly what they need.
- How:
  - Problem:
    - Front-end developer didn’t want to make 4-5 API hits for a single detail view (bad UX, especially on high-latency connections)
    - Solution: Embed related fields into serializers to save the clients additional API hits
    - Led to the next problem
  - Problem:
    - List routes were slower than ideal because of large amounts of data being serialized
    - Solution: Use different serializers for different ViewSet methods using get_serializer_class()
  - Problem:
    - Different classes of users have needs to see different data in the same views
    - Solution: Use different querysets based on different actions (create/retrieve/update/delete) and users/groups
  - Problem:
    - Making posts on model Y to do something that to the user affects model X is harder to maintain
    - Solution: Take advantage of DRF's actions to handle tasks related to a ViewSet's model (e.g. booking appointments for the vet/groomer)
  - Problem:
    - Users mentally filter data based on child/parent models of the one they’re looking at
    - Solution: use the rest-framework-filters library
      - The NestedFilter makes the API worlds easier to implement as it allows us to chain lookups across models without having to specifically write each lookup for each related model for each FilterSet
  - Problem:
    - The core DRF browseable API does not allow for formatting viewset docstrings
    - Solution: django-rest-swagger: This makes documenting API endpoints worlds easier (and slightly prettier)
  - Problem:
    - Technical support needs to be able to know when the user is reporting an issue caused by their own actions. Of course, our users are perfect and would never make mistakes!
    - Solution: django-simple-history: Gives us built-in auditing of user changes for nearly free.
  - Example code will be posted on GitHub before the talk
- Who: People with at least a beginner's knowledge of DRF, ideally with an interest in improving API design