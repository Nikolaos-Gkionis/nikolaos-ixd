---
layout: collection
order: 2
includeInBreadcrumbs: true
title: Opinions
description: A collection of books that I have read, articles I have liked and opinion blogs I have written. This collection is not exhaustive.
eleventyNavigation:
  key: Opinions
paginationHeading:
pagination:
  data: opinions
  size: 10
opinions:
  - url: "/opinions/change-by-design"
    data:
      date: 2022-02-20
      title: Change by design
      description: In Change by Design, Tim Brown, CEO of IDEO, the celebrated innovation and design firm, shows how the techniques and strategies of design belong at every level of business.
  - url: "/opinions/crime-and-punishment"
    data:
      date: 2022-01-20
      title: Crime and punishment
      description: Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.
  - url: "/opinions/design-hapiness"
    data:
      date: 2022-01-10
      title: Design hapiness
      description: An article by Mark Wilson 10 minute read.
  - url: "/opinions/design-process-ux"
    data:
      date: 2021-12-05
      title: Design process UX
      description: An article on the Stages of UX Design Process.
  - url: "/opinions/design-sprint"
    data:
      date: 2021-08-17
      title: Design sprint
      description: The Design Sprint is how smart teams start big projects. Invented at Google by Jake Knapp and perfected with more than 150 startups at GV (Google Ventures).
  - url: "/opinions/dont-make-me-think"
    data:
      date: 2021-06-03
      title: Don't make me think
      description: A Common Sense Approach to Web Usability (Voices That Matter).
  - url: "/opinions/github"
    data:
      date: 2022-02-20
      title: A Case against GitHub
      description: A case against github.com, not the service; but the way we use it.
  - url: "/opinions/social-media"
    data:
      date: 2022-01-20
      title: Social Media
      description: A case against the social media.
  - url: "/opinions/the-animal-farm"
    data:
      date: 2022-01-10
      title: The Animal Farm
      description: An allegory, more relevant today than when originally published.
  - url: "/opinions/the-buddha"
    data:
      date: 2021-12-05
      title: The Buddha
      description: Philosophize This! Episode number 9!
  - url: "/opinions/the-design-of-everyday-things"
    data:
      date: 2021-08-17
      title: The design of everyday things
      description: The only book you need to read before you start thinking about designing anything.
  - url: "/opinions/thoughts-on-design"
    data:
      date: 2021-06-03
      title: Thoughts on design
      description: One of the most important books ever written in graphic design.
tags:
  - homepage
---

{% for page in collections["opinions"] %}

- [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}

{% endfor %}
