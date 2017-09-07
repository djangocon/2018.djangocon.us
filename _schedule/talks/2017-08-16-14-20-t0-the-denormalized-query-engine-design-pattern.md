---
abstract: Full-text search engines like Elasticsearch have applications that stretch
  far beyond just adding text-based search to a website. Learn how denormalizing your
  data into a search engine can help you build all kinds of exciting things that couldn't
  be done with a relational database alone.
accepted: true
category: talk
date: 2017-08-16 14:20:00 -0500
difficulty: All
layout: session-details
permalink: /talks/the-denormalized-query-engine-design-pattern/
presenters:
- bio: "Simon Willison is an engineering director at Eventbrite, a San Francisco ticketing\
    \ company working to bring the world together through live experiences.\r\n\r\n\
    Simon joined Eventbrite through their acquisition of Lanyrd, a Y Combinator funded\
    \ company he co-founded in 2010. He is a co-creator of the Django Web Framework."
  company: Eventbrite
  github: simonw
  name: Simon Willison
  photo_url: https://pbs.twimg.com/profile_images/378800000261649705/be9cc55e64014e6d7663c50d7cb9fc75_400x400.jpeg
  twitter: simonw
  website: http://lanyrd.com/profile/simonw/
room: 'Ballrooms B and C'
sitemap: true
slides_url: 'https://speakerdeck.com/simon/the-denormalized-query-engine-design-pattern'
title: The denormalized query engine design pattern
video_url: 'https://youtu.be/NzcvewgqYog'
---

Most web applications need to offer search functionality. Open source tools like Solr and Elasticsearch are a powerful option for building custom search engines... but it turns out they can be used for way more than just search.

By treating your search engine as a denormalization layer, you can use it to answer queries that would be too expensive to answer using your core relational database. Questions like "What are the top twenty tags used by my users from Spain?" or "What are the most common times of day for events to start?" or "Which articles contain addresses within 500 miles of Toronto?".

With the denormalized query engine design pattern, modifications to relational data are published to a denormalized schema in Elasticsearch or Solr. Data queries can then be answered using either the relational database or the search engine, depending on the nature of the specific query. The search engine returns database IDs, which are inflated from the database before being displayed to a user - ensuring that users never see stale data even if the search engine is not 100% up to date with the latest changes. This opens up all kinds of new capabilities for slicing, dicing and exploring data.

In this talk, I'll be illustrating this pattern by focusing on Elasticsearch - showing how it can be used with Django to bring new capabilities to your application. I'll discuss the challenge of keeping data synchronized between a relational database and a search engine, and show examples of features that become much easier to build once you have this denormalization layer in place.

Use-cases I explore will include:
* Finding interesting patterns in your data
* Building a recommendation engine
* Advanced geographical search and filtering
* Reacting to recent user activity on your site
* Analyzing a new large dataset using Elasticsearch and Kibana
