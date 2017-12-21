---
author: Heather Luna
category: Sponsorship
date: 2017-08-04 00:00:01
layout: post
image: /static/img/blog/thankyoujbs.png
title: "JBS - Spotlight on Wine Access"
---

**Building a large, complex business platform with Django and AWS.**

At its heart, Wine Access is a marketing campaign driven platform that
delivers highly curated wines and wine recommendations to millions of
members all over the world. Wine Access also has a store that is
stocked with expert recommended vintages and editorial content for wine
connoisseurs – articles and facts on famous wine growing regions, 
tasting notes, food pairings – among other content. Due to regulatory
aspects, climate, and a highly limited inventory, Wine Access had a
challenging set of business issues to overcome. 
[Feel free to take a look.](https://wineaccess.com/)

At the heart of the platform is a large, sophisticated Django web
application hosted within AWS. In addition to powering more common
web based tasks such as user management, catalog administration, 
and serving web pages, we’re also using Django as a tool to help power
and orchestrate the various backend tools and technologies that have
also been incorporated to help the platform scale and mitigate some of
the complexity we have encountered in some of the unique issues
Wine Access has had to face.

While incorporating some of the more tradition AWS services such as
ELB, EC2, S3 and RDS, we’ve also been leveraging some of the more
recent AWS service offerings such as their API Gateway and Lambda
services. AWS Lambda is an asynchronous, serverless way of running
code based on events. A perfect example of how all these services are
integrated would be Wine Access’s order pipeline. Due to the
complexities in shipping, compliancy checks, and weather conditions, 
order information is submitted to an SQS queue (via Django) which acts
as an event source for further order processing and finalization via 
Lambda. Throughout this process, business logic is executed, data is
inserted/updated in our data stores, emails are sent
(via AWS’s Simple Mail Service), and other integrated 3rd party API
calls are made. By leveraging much of the functionality available
in the Django platform (management commands, signals, etc…), we have
been able to mitigate much of the back-end complexity needed to
orchestrate such pipelines, and it has enabled us to keep a very
high overall level of productivity.

Wine Access is one of several exciting and unique projects that we
have been working on at JBS. If you’re interested in finding out
more about who we are and what we do, please visit our
[website](http://www.jbssolutions.com/) .













