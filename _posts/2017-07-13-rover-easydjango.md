---
author: Heather Luna
category: Sponsorship
date: 2017-07-13 00:00:01
layout: post
image: /static/img/blog/thankyourover.png
title: "Making Django Upgrades Easy(er)"
---

At Rover Engineering, we recently undertook a major project to upgrade
our Django version from 1.8 up to 1.11. As a team, we’ve done our share
of Django upgrades before. This time however, we were particularly
ambitious in upgrading three versions plus dependencies back-to-back
with a goal of little to no interruption to the other projects going on
in the tech team. [And we were already busy](https://www.geekwire.com/2017/rover-acquires-dogvacay-biggest-competitor-online-dog-sitting-marketplace/)!
A couple months in, things are going pretty smoothly - we’ve managed to
successfully land our other big projects, make significant progress, 
and we’re now about ready to put the final pieces out into production. 
It used to be a fairly painful process to upgrade, but we’ve definitely
learned a few lessons along the way, and made our lives easier with 
some smart planning. Here are the lessons we’ve learned through this
process:

-  Ship what you can before you ship the actual upgrade. For us, we use
Docker for our dev environment, so we could build with the latest
Django version, update our code, then build again with our currently
running version to verify compatibility. Try to identify package
updates and other changes that are backwards compatible.
This will save you the headache of dealing with a gigantic change all
at once. It also helps by splitting the gargantuan task of upgrading
into much smaller, more manageable pieces. This is of course made
easier if you already deploy frequently.

-  Take the time to to evaluate if you actually need all your
dependencies. Features in some packages may now be present in core
Django, or in another package you already require. For us, this was
particularly true for projects we’d previously needed to fork because
they were no longer maintained. Often, these projects were shortcuts
we’d made years ago that we now have the tools to implement in a better
way.  Your future self will thank you for putting in the work to
remove unneeded external dependencies.

-  Avoid undocumented features and use the patterns the documentation
is giving you. This is less specific to upgrading and in general just a
good practice. I’m including it in this list because it becomes very
apparent when you’ve broken this rule when you are upgrading your
framework. Using an undocumented feature of Django is often a debt you
have to pay at upgrade time. Take the opportunity to eliminate these
from your code base if you can.

-  Involve members across the tech team in the upgrade process. Since
no one person can know everything there is to know about your app, make
sure to involve those that have specific knowledge of all the various
nooks and crannies. This helps ensure you’re looking at the right thing
and making sure there aren’t going to be any hidden surprises later on.
Involving other engineers also has the bonus of sharing the new features
and patterns to the team as a whole and getting teams excited about the
new tools they have available to them.

-  Set aside time to keep your ear to the ground for issues after
shipping. In my experience, no matter how thorough you are, there’s
always something. If you’ve put in the work, it’s very likely minor.
For me, I like to keep tuned in to what’s going on with customer facing
teams so I can respond quickly to anything that is not working like it
should. You should also use this time to document what you’ve done,
field questions about the changes, and reflect on what was most painful
and why. There’s almost certainly a way to make it even smoother next
time.

There are no doubt lots of other things to keep in mind for when it’s
time to upgrade - every code base will be different and every
engineering team will be different. For Rover, these are the things
that have helped us get through the pain that comes with upgrading your
framework. For those of you considering upgrading, with some work and
careful planning, I can say that we made it very successfully to the
other side.

*[Rachel Tobin](https://twitter.com/Saikonojinsei) is a Software
Engineer at [Rover.com](https://www.rover.com/), the nation’s largest
online marketplace of 5-star pet sitters and dog walkers. Her team is
focused on robustness, scalability, and developer productivity at Rover. 
She has three adorable cats.*
