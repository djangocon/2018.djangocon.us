---
author: Michael Trythall
category: Website
date: 2017-08-09 00:00:01
layout: post
image: /static/img/blog/thankyoulincolnloop.png
title: "The New DjangoCon US Website"
---

For the past three years [Lincoln Loop](https://lincolnloop.com/) has had the privilege of designing and building the DjangoCon US website in conjunction with the DjangoCon US volunteer team. Before us it was [Caktus Group](https://www.caktusgroup.com/), then [Eldarion](http://eldarion.com/), and so many others, including the versatile [Idan Gazit](http://gazit.me/), who shaped all of the early conference branding.

You can view previous versions of the website by putting the year as a subdomain into the URL. For example, last year's website is [2016.djangocon.us](https://2016.djangocon.us). You can go [pretty far back](https://2008.djangocon.us/), though things can get a little wonky!

Designing and building the conference website is no small feat. For many of us, the DjangoCon US community has provided not only job opportunities but lasting friendships. This can make it hard to be objective. It *feels* like a passion project, except you measure everything by budget, sprints, and customer satisfaction instead of shipping pet features in your free time. And when the work means so much to you, even *kindly worded* negative critique from a community you love stings a little.

Each design team poured love into their year's website. It's all in the details, whether it's the consistency of the textures in a background graphic, the clever type pairings in a logo, or charming but subtle effects used in a largely ignored area like the footer. All of this results in each year feeling super unique, which while visually impressive, is generally daunting to implement with few reusable patterns between years.

This year we approached the project differently, focusing less on branding and detailed visuals, and more on the code under the hood. We also made efforts to reduce barriers to contribution. For starters, the website is now built using [Jekyll](https://jekyllrb.com/) and hosted on [Github](https://github.com/djangocon/2017.djangocon.us) (credit to Jeff Triplett for this excellent idea). This means that adding content can be done in Markdown (or simple HTML) through Github without ever needing to touch the underlying engine.

To ease front-end development, we built the website on [Foundation Sites](http://foundation.zurb.com/sites.html). It includes plenty of well made components, is infused with best practices, and is supported by an active community. Foundation also implements and encourages good accessibility practices, something that is important to us as an inclusive community. Frameworks on the front-end *can* feel heavy so we use Foundation carefully, such that its usage is not set in stone. It's a balancing act, but having "batteries included" helps new developers contribute quickly.

We've also included [Gulp](https://gulpjs.com/) for local development, which is more Google-friendly than cobbled together JavaScript files. To document the design, the project uses [Style Sherpa](http://foundation.zurb.com/sites/docs/style-sherpa.html), Foundation's style guide generator (which also uses Markdown). The design is implemented in "blocks", or reusable, skinnable components containing other reusable, skinnable components. DjangoCon US volunteers have written an excellent [README ](https://github.com/djangocon/2017.djangocon.us/blob/master/README.md) documenting setup, development, and contribution. You may also notice that the logo this year is simpler, yet flexible, as it's meant to live on through the years with minor alterations.

By designing a componentized website, built on mature, well documented software, we hope future designers have everything they need to be fantastically creative without sacrificing ease of development (or breaking budgets). This will help the DjangoCon US team focus on doing what they do best, providing a truly awesome conference, and give beginners and veterans of the community another way to be involved. We hope that you'll give the new website a closer look, whether it's submitting feedback, creating a PR, filing a bug, or just giving kudos to the folks involved. There's much work to do and we'll need your help.

Have a lovely conference and be sure to stop by the Lincoln Loop booth!

*This post was written by [Michael Trythall](https://lincolnloop.com/team/michael-trythall/), Director of UX at Lincoln Loop.*
