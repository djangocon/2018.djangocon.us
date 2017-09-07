---
abstract: 'Tired of ranting to your co-workers "all models need `__str__`"? Or to
  run makemigrations? Let a tool validate those things for you! In this talk, we''ll
  discuss how to use and build linters for automated checks on Django projects. Don''t
  Repeat Yourself: make good practices knowledge executable!'
accepted: true
category: talk
date: 2017-08-16 12:20:00 -0500
difficulty: Intermediate
layout: session-details
permalink: /talks/preventing-headaches-with-linters-and-automated-checks/
presenters:
- bio: Web developer from Brazil. Loves beautiful code. Partner at [Vinta](https://www.vinta.com.br/),
    a web consultancy specialized in building products with React and Django.
  company: Vinta Software
  github: ''
  name: "Flávio Junior"
  photo_url: 'https://www.gravatar.com/avatar/ae23b47de29112b26cccb1a1e51ad3e4?s=400'
  twitter: flaviojuvenal
  website: https://www.vinta.com.br/
room: 'Ballroom A'
sitemap: true
slides_url: 'https://www.vinta.com.br/blog/2017/talks-around-globe-djangoconau-pybay-djangoconus/'
title: Preventing headaches with linters and automated checks
video_url: 'https://youtu.be/IMRHFlDxaqU'
---

While it's very common to enforce PEP8 code style with tools like flake8, it's rare for Django projects to use any other types of tools for automated checks. However, linters and automated checks are a good way to enforce code quality beyond code style. Human-based code reviews are great, but if an experienced programmer leaves the organization, all quality-related knowledge they have will be gone. One way to prevent this is to make developers consolidate their knowledge as custom check tools. Instead of repeating to every junior programmer how they should code, experienced developers should write tools to do that for them. Having this kind of "executable knowledge" is great to ensure long-lasting good practices in organizations.

Thankfully, Python already has a number of extensible linters and check tools that can be used to consolidate knowledge. Also, Django has the System check framework, which can be used to write custom static validations to Django projects. In this talk, we'll discuss existing linters and tools, what benefit they bring to Django projects, how to extend them and how to build custom ones. Combined with IDEs, pre-commit hooks, and CI tools, linters can validate code at programming time, commit time, or CI time, thereby ensuring good practices in all development workflow.
