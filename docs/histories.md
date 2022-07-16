---
layout: collection
order: 1
title: Design histories
includeInBreadcrumbs: true
description: Design histories that I have implemented. They are smaller than case studies and provide a snapshot on a section of a service.
eleventyNavigation:
  key: Histories
paginationHeading: Design Histories
pagination:
  data: Histories
  size: 10
Histories:
  - url: "/histories/validation"
    data:
      date: 2022-07-15
      title: Validation
      description: Should prototypes have validation?
  - url: "/histories/macro-interactions"
    data:
      date: 2022-07-14
      title: Macro interactions
      description: A series of different approaches to a single user problem.
  - url: "/histories/house-consignments"
    data:
      date: 2022-07-07
      title: House consignments
      description: Exploring our riskiest assumption.
  - url: "/histories/guarantee"
    data:
      date: 2022-07-01
      title: Guarantee
      description: One of our smallest sub-journeys with a lot of dependencies.
  - url: "/histories/trader-details"
    data:
      date: 2022-06-30
      title: Trader details
      description: The new phase 5 trader details journey.
  - url: "/Histories/pre-task-list"
    data:
      date: 2022-05-20
      title: Pre task list
      description: A series of prototype screenshots, including summary page text decoration variants
  - url: "/Histories/map"
    data:
      date: 2022-04-12
      title: Map
      description: A Service lanscape mapping and an Ecosystem exporation
  - url: "/Histories/ncts-overview"
    data:
      date: 2022-04-12
      title: Service Overview
      description: The rationale behind the New Computerised Trading System. How will the service evolve in Phase 5
  - url: "/Histories/variants"
    data:
      date: 2022-02-20
      title: Dashboard variants
      description: A set of dashboard variants for the Solution Design and Development team.
  - url: "/Histories/using-figma"
    data:
      date: 2022-01-20
      title: Using Figma
      description: A creation of a Figma library to quickly iterate ideas with little time cost.
  - url: "/Histories/adding-a-cms"
    data:
      date: 2022-01-10
      title: Adding a CMS
      description: Adding a CMS on the 'design histories' 11ty app.
  - url: "/Histories/academy-transfers-prototype"
    data:
      date: 2021-12-05
      title: Academy transfers prototype
      description: A 4 week cycle to build a vertical slice of small part of the service.
  - url: "/Histories/tracking-conditions-individually"
    data:
      date: 2021-08-17
      title: Tracking conditions individually
      description: Let providers track and update the status of offer conditions individually.
  - url: "/Histories/removing-2-filters"
    data:
      date: 2021-06-03
      title: Removing 2 filters
      description: Why we removed subject and location as filters
tags:
  - homepage
---

{% for page in collections["Histories"] %}

- [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}

{% endfor %}
