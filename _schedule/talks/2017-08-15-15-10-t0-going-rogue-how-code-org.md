---
abstract: "When my engineers didn\u2019t have the time to create the curriculum writing\
  \ platform of my dreams, I went rogue to make it happen. With Django and some creative\
  \ thinking, I built a tool that code.org now uses to write lessons better and faster\
  \ (at scale!) without drawing the ire of our engineering team."
accepted: true
category: talk
date: 2017-08-15 15:10:00 -0500
difficulty: All
layout: session-details
permalink: /talks/going-rogue-how-code-org-creating-a-curriculum-development-platform-without-their-engineers/
presenters:
- bio: Josh is a recovering Middle School English, Computer Science, and Robotics
    teacher. For the last three years he's been heading up the Middle School curriculum
    efforts at Code.org where his passion for equitable, engaging, and authentic applications
    of computer science have helped to develop thousands of new CS teachers who have
    gone on to bring millions of new students to Computer Science. He's also a huge
    proponent of Maker education, Arduino, and 3D printing.
  company: Code.org
  github: ''
  name: Josh Caldwell
  photo_url: 'https://www.gravatar.com/avatar/76bb7de56b455add35a74419cb2a5799?s=400'
  twitter: mrjoshida
  website: https://code.org
room: 'Ballrooms B and C'
sitemap: true
slides_url: 'https://docs.google.com/presentation/d/1M_oISPmhuuSPwcBDBD2vDp8YF6E7AnRz2AS_-S0HoR4/edit#slide=id.g1e4b1e39f3_0_0'
title: 'Going Rogue: How Code.org Created a Curriculum Development Platform Without
  their Engineers'
video_url: ''
---

As a Middle School computer science teacher, I know enough to be dangerous, but not enough to consider myself a "real" developer. As a member of the curriculum team at Code.org (a nonprofit dedicated to providing all students with access to CS education), I knew that our combination of rendered markdown files and Google docs was far from the most effective way to write and deliver curriculum. If only we could schematize our curriculum writing, I thought,  we'd be able to write more consistent lessons with better support for teachers to see which lessons are aligned to which standards, or where a given concept was first taught.

When I brought this proposal to our engineering team everyone was excited about the idea, but there was no way we had the bandwidth to actually create it. Our small team of engineers are booked solid building tools for students to learn programming and for teachers to manage their classes. When it comes to the needs of our curriculum writers, we obviously need to come after the students and teachers. But wait, I know how to program. I did the "Two Scoops" tutorial. Why couldn't I make the tool I had dreamed of?

Using Django and Mezzanine as a base, I gradually built a system that allows Code.org curriculum writers to write faster, more consistent, and better supported lessons at a massive scale. Along the way, I also dealt with the very real concerns of my engineering team. How can we be sure this will scale to our 10's of thousands of teachers? What about our millions of students? How can we be certain that this doesn't introduce new security vulnerabilities to our site? Are you sure you know what you're doing here?

The answer to all of these problems was surprising simple, and has allowed me to address the needs of our curriculum team without taking the engineering team's focus away from the customers that really matter - teachers and students.

After many months of development, CurriculumBuilder has become an essential internal tool for curriculum writing at Code.org, and continues to find new ways to solve problems that would otherwise go unaddressed. Not bad for a Middle School CS teacher who had never before written software used by others.
