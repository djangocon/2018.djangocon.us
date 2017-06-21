---
abstract: In this tutorial , I talk about GraphQL, what it is and why you should consider
  it as a way of building apis for you application.  This will then be followed by
  a hands on walk through of how you can build a GraphQL api in Django using graphene.
accepted: true
category: tutorial
date: 2017-08-13 13:30:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /tutorials/build-a-graphql-api-using-django/
presenters:
- bio: "I love python, really enjoy working in Django. \r\nI am a Senior Developer\
    \ at Thoughtworks  and have spent a few years helping clients build awesome web\
    \ and mobile applications.\r\n"
  company: I work for Thoughtworks
  github: ''
  name: Muranga James
  photo_url: 'https://www.gravatar.com/avatar/8376ac53dea210d3578b33dbf4c3fd9f?s=400'
  twitter: murangajames
  website: ''
room: Manito
sitemap: true
slides_url: ''
title: Build a GraphQL API using Django
video_url: ''
---

This tutorial will introduce GraphQL to the participants, and walk them through rebuilding the poll app as a GraphQL api.

### What is GraphQL? (10 Minutes)

- What does GraphQL stand for?
- Where it came from?

### Why would you consider using it? (5 Minutes)

- What problems does GraqhQL solve.

### GraphQL concepts (Schemas, Fields, Queries, Mutations) (10 Minutes)

- Go over some of the theory behind the GraphQL concepts

    - Schemas
    - Fields
    - Queries
    - Mutations

### Graphene (the go-to Python GraphQL framework) (5 Minutes)

- Overview of the graphene framework

### Setting up a project with django-graphene (30 Minutes)

- Introduce the sample application (Polls) we shall be building
- Setup a simple django project and walkthrough how to get django-graphene setup
- Setup the models for the sample application (Polls)

### Building your schema (10 Minutes)

- Add a simple schema to the project and view it using the GraphiQL tool

### Adding queries to your GraphQL api (10 Minutes)

- Add the relevant queries to the schema for our sample application

### Test your API with GraphiQL (10 Minutes)

- Introduction to the GraphiQL tool and how to use it to view your data

### Changing data through mutations (10 Minutes)

- Add a mutation to the schema

### Writing unit tests for your GraphQL api (20 Minutes)

- Write tests for the queries in the API
- Write test for the mutations in the API
- Go over some patterns to make it easier to write these kinds of tests

### Handling authorization in your GraphQL API (10 Minutes)

- Securing data based on the logged in user

### Questions
