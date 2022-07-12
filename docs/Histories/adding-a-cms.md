---
layout: post
title: Addign a CMS
includeInBreadcrumbs: true
description: Adding a CMS on the 'design histories' 11ty app.
date: 2022-01-20
eleventyNavigation:
  key: Addign a CMS
  parent: Histories
---

## Case study

The 'design histories have been around for more than a couple of years. Originally created by the interaction designers of the BAT (Becoming a Teacher), their design history [BAT design history](https://bat-design-history.netlify.app/).
Well over a year and a half ago I created the same for the SDD (Solutions Delivery and Design), [SDD design history](https://sdd-design-history.netlify.app/). Since then it became apparent that not all interaction designers can use it efficently, and write design histories in a consistent manner. Therefore I decided to add a CMS on the 'design histories'. To allow more adoption and a consistent design going forward.

#### Netlify CMS Design

I have chosen to create the CMS using the [Netlify CMS](https://www.netlifycms.org/). Netlify CMS is based on client-side JavaScript, reusable APIs and prebuilt Markup. In a nutsell it is single page React application served via a CDN, this means better performance, higher security, lower cost of scaling, and a better developer experience. It is also Open Source, even though with a higher learning curve if you decide to host somewhere else rather than [Netlify](https://www.netlify.com/)

#### What is a design history?

When designing and building a service, it can be easy to forget why previous decisions were made, even more so as new people join the team and others leave. A design history can help by creating a permanent record.

A design history site is like a blog, with posts describing the development of new features, iterations of existing ones or findings from user research – anything that may be useful to return to later.

This project was developed by the Becoming a teacher team at the Department for Education who found that by keeping a design history, they could:

- re-evaluate decisions
- see how a feature changed over time
- see how things tested in research
- give context to new team members
- returndemonstrate reasons why certain features did not work
- create snapshots of how things looked at significant milestones
- share design decisions across government
- share everything with service assessors

As of February 2020, the [Becoming a teacher design history](https://bat-design-history.netlify.app/) includes more than 200 posts documenting 5 different services. You can learn more about how and why the team created their design history on the [DfE Digital blog](https://dfedigital.blog.gov.uk/2020/09/01/design-history/).

## Screenshots

#### Netlify dashboard

[![Netlify dashboard](/assets/images/adding-a-cms/netlify-dashboard.png)](/assets/images/adding-a-cms/netlify-dashboard.png)

<div class="govuk-inset-text">
Before adding the CMS, you need a Netlify account and a team, where all your static apps are hosted.</div>

#### Github repo

[![Github repo](/assets/images/adding-a-cms/github-repo.png)](/assets/images/adding-a-cms/github-repo.png)

<div class="govuk-inset-text">
  After the initial setup is done, you simply need to connect your app to a github repo, it uses an 0Auth API and authentication is seamless. Any changes to the github repo are automatically updated to the live app.
</div>

#### Design History

[![Design History](/assets/images/adding-a-cms/design-history.png)](/assets/images/adding-a-cms/design-history.png)

<div class="govuk-inset-text">
This is the standard <a href="https://dfe-design-history-cms.netlify.app/">Design history</a> with a couple posts added from the CMS.
</div>

#### CMS home

[![CMS home](/assets/images/adding-a-cms/cms-home.png)](/assets/images/adding-a-cms/cms-home.png)

<div class="govuk-inset-text">
The CMS homepage can be accessed by simply adding /admin to your url or whatever you decide to name your CMS on your repo, very basic instructions on how to do that, can be found on the <a href="https://www.netlifycms.org/docs/intro/">NetlifyCMS docs.</a>
</div>

#### CMS editor

[![CMS home](/assets/images/adding-a-cms/cms-editor.png)](/assets/images/adding-a-cms/cms-editor.png)

<div class="govuk-inset-text">
Even though the CMS editor is rudimentary, it provides a very simple interface to allow anyone to add blog posts to the same 'design history' without having to worry about any coding and formatting.
</div>
