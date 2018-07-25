---
abstract: "This one quick trick will help you measure the diversity of your hiring\
  \ pipeline!\nIt's hard to improve diversity in a hiring pipeline without measuring\
  \ what exists in the first place. Using django, you can make this information visible.\
  \ I'll cover how I made a big impact with very little work."
accepted: true
category: talk
date: 2018-10-15 09:00:00 -0500
difficulty: All
layout: session-details
permalink: /talk/one-engineer-an-api-and-an-mvp-or-how-i-spent-one-hour-improving-hiring-data-at-my-company/
presenters:
- bio: "Nicole attended Hackbright Academy in 2012, and has been in love with python ever since. She can currently be found at Clover Health, tackling with glee data pipelines and APIs and human systems. In her free time, Nicole is an avid dancer and teacher, sci-fi book fanatic, soul and jazz aficionado, and cheese lover. She has an MA in English Literature and Women's Studies from the University of Liverpool."
  company: Clover Health
  github: ''
  name: Nicole Zuckerman
  photo_url: ''
  twitter: zuckerpunch
  website: ''
published: true
room: ''
sitemap: true
slides_url: ''
summary: ''
title: 'One Engineer, an API, and an MVP: Or how I spent one hour improving hiring
  data at my company.'
track: ''
video_url: ''
---

Intro (3 min)
---------------------
The fact that tech is struggling to hire or retain employees from diverse backgrounds has been written about and discussed thoroughly, particularly in the last few years. The economic, societal, and moral benefits of diversity are also well documented. Why is it hard, then, for well-intentioned organizations to shift their demographics? There are a number of reasons, but one that doesn’t appear to have been thoroughly discussed already is the challenge of gathering and responding to data about diversity within a company’s hiring pool and existing employees.  One hack day, I was involved in too many projects and had only a token amount of time to devote to the one I was most interested in; seeing if we could determine whether we had sufficient diversity for any given role to start interviewing candidates, or if we needed to spend more efforts sourcing diverse candidates for the pool.  I accomplished an MVP in approximately an hour, once I had an api key and permissions.  It doesn’t necessarily require a huge effort to make a big difference.


In this talk, I'll walk through the MVP indicating, for each role, whether there was “sufficient diversity”.  I'll also address gotchas, limitations, and What Now.

The MVP (5 min)
---------------------
* Simple django webapp with one view
* Real-time API call to Greenhouse to fetch data:
    * Get a list of roles that are open now
    * For each, get all applications
    * Anonymize and tally number of applicants self-attesting as belonging to a protected group
    * Display aggregates for each role on one page

V2 (5 min)
---------------------
* Regularly sync new data from greenhouse to our DB
* Show only diversity stats for candidates who have existed the pipeline
* Allow slicing of data by different tags: gender, race, recruiter, source.
* Show diversity at every step of the pipeline, from recruiter screen through offer acceptance.
* List view of all roles, click through to details for a particular role, or department

Limitations and Gotchas (7 min)
---------------------
* Be careful with people's sensitive information: Where to host data so not everyone can access it?
* Don't allow data to be sliced to such a fine degree that a person is identifiable
* Don't include people currently in the pipeline; we might make hiring decisions based on this info, which is against the law
* Be sensitive about who can see this information; maybe everyone should get the 10,000 foot view in an all-hands, but being able to view per-role, slicing on different tags should probably be limited access.
* Not everyone fills out this information: it's sparse.  It's not available for referrals or candidates sourced internally, and even on the website, not everyone chooses to fill it out
* The data that we need to collect by law doesn't match up entirely with what we want to collect, or what people might be willing to divulge.  We're also limited by what it's legal to ask.
* What is ‘sufficient’ diversity, anyway?


OK, so what now?
---------------------
* Doing it Right
    * We found out later there's a company that does a lot of this; we ultimately decided to use them for the future, so engineering hours don't need to support this webapp indefinitely.  We didn't discover this until we were deep in V2, though. Could we have done research to discover this company first and saved ourselves the work? Absolutely!  Would anyone have thought to google it before I made my MVP?  Unlikely.  We found out about this company through our Diversity and Inclusion manager, who joined right after I made my MVP.  
    * If you don't have the budget to outsource the way we ultimately did, the webapp we just discussed is perfectly usable, though!  It probably requires further iteration to handle the sparsity of data (determining how many candidates you need for a role to determine the statistical significance of your results, for example).  Even if your time is limited, the MVP is better than nothing at all.
* Integrating this with data for current employees is challenging, as well; pulling information from both places might be an interesting idea for next hack day...
* Now, when you identify departments or roles where there isn't representation across different groups, go back and source those missing groups!  If there's a big dropoff at one step of the recruiting funnel, investigate why people are leaving there.
* It's hard to get diversity right, but it's worse not to try.
