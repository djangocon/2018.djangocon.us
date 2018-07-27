---
abstract: BDD leverages a simple domain-specific language to enhance the effectiveness
  of testing within SDLC. With BDD workflow, a tester is able to accelerate development,
  speed up execution of cross-platform tests, facilitate CI/CD, standardize validation
  and enhance the readability of test documentation.
accepted: true
category: talk
date: 2018-10-15 11:00:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talk/bdd-behavior-driven-development-testing/
presenters:
- bio: 'I work at the Alzheimer''s Therapeutic Research Institute, University of Southern
    California, as a programmer analyst, MS in Computer Science. I love exploring
    cut-edge techniques and trying to integrate them with my current project.

    I have attended a lot of meetups related to Django in San Diego ([I saw one of
    the organizers giving the talk in last year DjangoCon](https://2017.djangocon.us/talks/stumbling-through-django-and-how-not-to/))
    which inspired me a lot and enhanced my technical skills.

    Apart from being a programmer, I''m also learning aikido (Japanese martial arts)
    and Japanese in my spare time.'
  company: Alzheimer's Therapeutic Research Institute, University of Southern California
  github: ''
  name: Le Xiao
  photo_url: ''
  twitter: ''
  website: ''
published: true
room: 'Salon A-E'
sitemap: true
slides_url: ''
summary: ''
title: BDD (Behavior Driven Development) Testing for Django Apps
track: t0
video_url: ''
---

Unit tests focus on classes and methods while integration tests focus on components and basic business logic. However, neither of these is executed against the full system environment nor take account of the system's behaviors as a whole. Therefore, our app will not be assured to work properly in production environments if we limit our testing approach to only two types of tests. Incorporating BDD testing into our app's testing plan addresses these limitations.

BDD is experiencing increasing industry adoption but can still prove daunting to implement from scratch. Our talk will describe how we implement a BDD framework stack by answering following questions:

1. How do we design structured and reusable test code for BDD?
2. How do we integrate BDD tests with our CI/CD pipeline?
3. How do we speed up the execution of BDD automated tests?
4. How do we set up our BDD framework?
5. What are the limits of BDD testing?
