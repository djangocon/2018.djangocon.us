---
abstract: Deploying without any downtime, allows you to deploy more often, which leads
  to faster turnaround time on both bug fixes and features. Come learn how to deploy
  more often, more comfortably, without taking any downtime.
accepted: true
category: talk
date: 2018-10-17 14:10:00 -0500
difficulty: All
layout: session-details
permalink: /talk/strategies-for-zero-down-time-frequent/
presenters:
- bio: Nick Humrich has been using Python professionally for over 3 years. He is currently
    a DevOps engineer for Canopy, a software startup changing the US Tax industry.
    Before Canopy, Nick was at Amazon Web Services working on the Elastic Beanstalk
    product. Nick has a Bachelors Degree in Computer Science from Brigham Young University.
  company: Canopy
  github: ''
  name: Nick Humrich
  photo_url: '/static/img/speakers/nick-humrich.jpg'
  twitter: nhumrich
  website: http://blog.humrich.us
published: true
room: 'Salon A-E'
sitemap: true
slides_url: ''
summary: ''
title: Strategies for Zero Down Time, Frequent Deployments
track: t0
video_url: ''
---

Deployments can be stressful, but should'nt be. We all hear about big companies deploying several, if not thousands of times a day. In order to acheive this, you have to be able to deploy without impacting performance at all; you need to feel confident and comfortable when you deploy. Even a couple miliseconds of downtime is unacceptable in these environments. Whether you have to provide SLA's to your customers or not, being able to deploy without any downtime, allows you to deploy more often, which leads to faster turnaround time on both bug fixes and features. Successfully deploying without and downtime, however, is non-trivial. Perhaps you have heard the term Blue/Green deployment, and wonder what that is.  Come learn about some of the strategies used for deployments, as well as all the changes to your code and your process you will have to make in order for it to truly work, and make you feel more confident on every deploy to production.

# strategies for deploying
* Blue/Green
  * DNS
    * slow, relying on client caching. Have leave up for a while.
  * load balancer dynamic config
* Rolling
  * drain
    * fail healthcheck
    * handle somewhere else
# non-strategies
* process swap
* load balancer target update
* git push

# tools for these
* Heroku
* Elastic Beanstalk
* nginx/haproxy
* kubernetes

# Ways you need to change your application
* No more backwards incompatible api's (unless you dont use javascript)
* No more backwards incompatible database schema changes
  * How does this work in practice?
  * How do you make these changes then?
  * migration scripts but be schema only
  * no "data migrations" without following the 3 deploy strategy
  * is it worth it?
  * Why? You have two versions of your app running in prod at the same time.
* Healthchecks
* Canaries


# Doing it often
* increase confidence
  * canaries
  * shadow deploys
  * feature toggles
  * pipelines/environments
  * contract testing
  * artifacts!!!
  * rollbacks
