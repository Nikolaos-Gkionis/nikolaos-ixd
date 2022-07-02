---
layout: collection
order: 1
title: Case studies
includeInBreadcrumbs: true
description: Several design case studies that I have been a contributor or completely implemented.
eleventyNavigation:
  key: Studies
paginationHeading: Case Studies
pagination:
  data: studies
  size: 10
studies:
  - url: "/studies/tracking-conditions-individually"
    data:
      date: 2021-08-17
      title: Tracking conditions individually
      description: Let providers track and update the status of offer conditions individually.
  - url: "/studies/removing-2-filters"
    data:
      date: 2021-08-23
      title: Removing 2 filters
      description: Why we removed subject and location as filters
  - url: "/studies/academy-transfers-prototype"
    data:
      date: 2021-12-05
      title: Academy transfers prototype
      description: A 4 week cycle to build a vertical slice of small part of the service.
  - url: "/studies/adding-a-cms"
    data:
      date: 2022-01-10
      title: Adding a CMS
      description: Adding a CMS on the 'design histories' 11ty app.
  - url: "/studies/using-figma"
    data:
      date: 2022-01-20
      title: Using Figma
      description: A creation of a Figma library to quickly iterate ideas with little time cost.
  - url: "/studies/variants"
    data:
      date: 2022-01-25
      title: Dashboard variants
      description: A set of dashboard variants for the Solution Design and Development team.
tags:
  - homepage
---

{% for page in collections["studies"] %}

- [{{ page.data.title }}]({{ page.url | url }}) – {{ page.data.description }}

{% endfor %}
