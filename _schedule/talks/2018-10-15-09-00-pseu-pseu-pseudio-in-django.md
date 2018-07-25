---
abstract: "GDPR went into effect on 5/25/18 and the management of personally identifiable\
  \ information (PII) has changed dramatically. In this talk, we\u2019ll dive into\
  \ the practice of pseudonymization, a data management and de-identification procedure\
  \ that Django developers can leverage for GDPR compliance."
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: Beginner
layout: session-details
permalink: /talk/pseu-pseu-pseudio-pseudonymization-in-django/
presenters:
- bio: "A born entrepreneur with over a decade of practical IT experience, Frank has\
    \ helped lead Cuttlesoft, a Custom Software and Product Development agency, to\
    \ two states and 10x growth in just 3 years. That doesn\u2019t mean that he doesn\u2019\
    t get his hands dirty. As a fullstack developer and systems expert, this CEO likes\
    \ to roll up his sleeves and get to work. His motto; \u201CIterate towards perfection\u201D\
    \ is emblazoned on the company\u2019s masthead and in their team\u2019s minds."
  company: Cuttlesoft
  github: ''
  name: Frank Valcarcel
  photo_url: ''
  twitter: fmdfrank
  website: https://www.cuttlesoft.com
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: Pseu, Pseu, Pseudio. Pseudonymization in Django.
track: ''
video_url: ''
---

The General Data Protection Regulation, better known as GDPR, is a regulation on data protection and privacy for all individuals within the European Union. GDPR went into effect on May 25, 2018 and was the cause of the “Great Privacy Policy Update” that occurred in the weeks prior.

This talk will cover what GDPR is and why you should care about it, but we won’t stop there. This is not going to be another talk on data protection policy. No. 

In this talk, we’re going to jump right into discussing HOW to implement data patterns that comply with regulations like GDPR by examining a pattern known as pseudonymization. 

Pseudonymization is a data de-identification procedure where fields of personally identifiable information (PII) within a data record are replaced by one or more artificial identifiers. These artificial identifiers are also called pseudonyms. Pseudonyms make a data record less identifiable without sacrificing data analysis and processing. GDPR requires that PII undergo either pseudonymization or complete data anonymization.

For the hands-on portion of this talk, we’ll construct a Django User Model where we apply pseudonyms to the data attributes which qualify as PII. We’ll explore a couple strategies for implementing a compliant pseudonymization pattern, examining their individual approaches and performance, and we’ll discuss limitations of pseudonymizing certain attributes and how to achieve compliance through consent.

GDPR sets a precedent for responsible data management. Whether your application serves citizens of the EU or not, the regulations serve as an encouragement for protecting your user’s identities. This talk is great for everyone from beginners to expert Django developers… and fans of Phil Collins :)
