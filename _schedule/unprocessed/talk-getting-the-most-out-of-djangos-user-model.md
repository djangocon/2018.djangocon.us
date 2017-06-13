---
abstract: "Django\u2019s User model has many great fields for storing user data. But\
  \ what if we need more?  There are different ways to add extra fields to your project\u2019\
  s User model depending on your app's needs. This talk will cover different methods\
  \ for how to customize the User model to your specific needs."
accepted: true
category: talk
date: 2016-07-18 09:00
layout: session-details
permalink: /talk/getting-the-most-out-of-djangos-user-model/
presenters:
- bio: 'I''m a Software Engineer at the University of Texas at Austin. I make Django
    apps, and I love Django. '
  company: The University of Texas at Austin
  github: ''
  name: Julia M Looney
  photo_url: ''
  twitter: ''
  website: ''
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: "Getting the most out of Django\u2019s User Model"
track: ''
video_url: ''
---

Django’s User model is nice, but the fields it provides out of the box are minimal. We frequently need to associate our own custom data with a user, and luckily Django provides ways for us to add to its built-in User model. This talk will help novice Django developers understand which options are best when it comes to getting the most out of the Django User model. 

I’ll start by talking about the built-in Django User model and what it has to offer. 

Then I will identify scenarios when the User model might not be enough for a project, and why someone might want something with more flexibility.
Then we’ll look at the different ways to get the most out of the Django User model. There are two main methods I’ll cover:

1. Extending the User model
2. Creating a custom User model

*Extending the User model:*

Extending the User model is handy when you only need to add a few extra fields. There are two main ways to do this: using a proxy model, and using a OneToOneField. I will cover the pros and cons of each, and give examples for implementing each. 

*Creating a custom User model:*

With this method, you can substitute Django’s default User model with your own. Though more complex, a custom User model is particularly useful when you need to uniquely identify users by email address instead of by username.  I’ll go into a couple more scenarios where a custom User model would be helpful, and show examples of implementation. 

Lastly, I will show how each method works with the default Django admin, and how they can be managed there.