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
      description: A creation of a Figma library to quickly iterate ideas with little time cost.
  - url: "/opinions/design-hapiness"
    data:
      date: 2022-01-10
      title: Design hapiness
      description: Adding a CMS on the 'design histories' 11ty app.
  - url: "/opinions/design-process-ux"
    data:
      date: 2021-12-05
      title: Design process UX
      description: A 4 week cycle to build a vertical slice of small part of the service.
  - url: "/opinions/design-sprint"
    data:
      date: 2021-08-17
      title: Design sprint
      description: Let providers track and update the status of offer conditions individually.
  - url: "/opinions/dont-make-me-think"
    data:
      date: 2021-06-03
      title: Don't make me think
      description: Why we removed subject and location as filters
  - url: "/opinions/github"
    data:
      date: 2022-02-20
      title: A Case against GitHub
      description: A set of dashboard variants for the Solution Design and Development team.
  - url: "/opinions/social-media"
    data:
      date: 2022-01-20
      title: Social Media
      description: A creation of a Figma library to quickly iterate ideas with little time cost.
  - url: "/opinions/the-animal-farm"
    data:
      date: 2022-01-10
      title: The Animal Farm
      description: Adding a CMS on the 'design histories' 11ty app.
  - url: "/opinions/the-buddha"
    data:
      date: 2021-12-05
      title: The Buddha
      description: A 4 week cycle to build a vertical slice of small part of the service.
  - url: "/opinions/the-design-of-everyday-things"
    data:
      date: 2021-08-17
      title: The design of everyday things
      description: Let providers track and update the status of offer conditions individually.
  - url: "/opinions/thoughts-on-design"
    data:
      date: 2021-06-03
      title: Thoughts on design
      description: Why we removed subject and location as filters
tags:
  - homepage
---

{% for page in collections["opinions"] %}

- [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}

{% endfor %}
