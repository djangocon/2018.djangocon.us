---
abstract: 'If there are multiple ways to extract a fact from a database, there''s
  redundancy, which in turn cause anomalies and bugs. The solution: a process called
  normalization. In this talk, we''ll learn about it using Django. We''ll also discuss
  more performant alternatives when normalization isn''t feasible.'
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: All
layout: session-details
permalink: /talk/normalize-until-it-hurts-denormalize-until-it-works-in-django/
presenters:
- bio: "I'm a software engineer from Brazil and partner at Vinta Software (www.vinta.com.br). At Vinta, we love beautiful high-quality products, from UX to code, and we will defend them against unreasonable deadlines and features. We use mostly React and Django.
"
  company: Vinta Software
  github: ''
  name: "Fl\xE1vio Juvenal"
  photo_url: ''
  twitter: flaviojuvenal
  website: https://www.vinta.com.br/
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: '"Normalize until it hurts; denormalize until it works" in Django'
track: ''
video_url: ''
---

There's a good practice that says "a database is a representer of facts". If there's more than one way to extract a single fact from the database, then there's a redundancy in it. Every redundancy can cause different anomalies in the data, which in turn cause bugs in the application. To avoid that, there's a process called normalization, which involves following sets of rules to restructure the database to remove redundancies without losing the original facts. The traditional set of normalization rules are the so-called Normal Forms: First Normal Form, Second, Third, etc. Unfortunately, those are frequently overlooked by developers due to their excessive formalism. But in fact, even the Normal Forms aren't enough to avoid anomalies, since they're concerned about redundancies only in a single table*. Since cross-table dependencies are very common in modern applications, we must go beyond normal forms to prevent problems.

In this talk, we'll present normalization rules on a friendly language, going beyond normal forms. We'll understand how the software requirements cause dependencies in database tables, both in-table and cross-tables. We'll show real examples of non-trivial dependencies that happen on Django models. We'll discuss how normalization prevents redundancies, inconsistencies, anomalies, and bugs. Knowing that normalization can cause slowdowns in queries, we'll present how to increase performance with denormalization, which is not the same of not normalizing. Instead, denormalization means being able to represent data in multiple ways to speed up queries without introducing inconsistencies. We'll discuss Django-related denormalization tools that use cronjobs, indexes, caching, materialized views and triggers, and NoSQL.

*_It's common to ignore the fact that normal forms only discuss redundancies inside a single table/record/relval. More about this in [this article](http://www.bkent.net/Doc/simple5.htm#label6) reviewed by Codd, Fagin and Date, key figures of the relational model._

Here's the planned outline:

- [1 minute ] Who am I.

- [6 minutes] Explaining normalization without normal forms formalism:
  * Defining Normalization.
  * Normalization with only two concepts: Candidate Keys and Dependencies.
  * Normalization Rule: every field must provide a fact about the whole candidate key and nothing but the key.
  * Violating the Rule: denormalized example, along with anomalies it has.
  * Prevent anomalies with a solution based on the Rule.
  * Setting a Candidate Key in Django: unique_together. Concurrency issues without unique_together.

- [4 minutes] How that's relevant for Django? Doesn't modeling with the ORM kind of solves that?
  * Tricky case of field migration.
  * Tricky case of historical field.

- [4 minutes] What about cross-table dependencies?
  * A good practice: "Database is Representer of Facts". If there's more than one way to extract a single fact from the database, there's a redundancy. If it's possible to compute a field value by looking only for other table fields, there's a redundancy.
  * Solution: compute at DB-level and query-time using query expressions, conditional expressions and database functions.

- [1 minutes] What about performance?
  * Certain facts are naturally expensive to compute.
  * But design can't be thought a priori to solve them. Performance is easier to solve than imprecision.
  * Therefore: "Normalize until it hurts; denormalize until it works". To denormalize you have first to normalize.

- [3 minutes] How to denormalize?
  * Separate concerns: OLTP vs. OLAP. Transactional data vs. Analytical data.
  * Easy way: aggregation queries + extra denormalized models + cronjob.

- [6 minutes] Other less trivial ways to denormalize:
  * Indexes
  * Caching
  * Materialized Views
  * Triggers
  * SQL + NoSQL
