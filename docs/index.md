---
homepage: true
layout: product
includeInBreadcrumbs: true
image:
  src: /assets/about-me.png
  alt: my bricklayer back yard.
startButton:
  href: /curriculum-vitae
eleventyComputed:
  title: "{{ pkg.description }}"
  ogImage:
    alt: "{{ options.homeKey }}"
---

<div class="govuk-grid-row">
{% for item in collections["homepage"] %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">{{ item.data.title }}</h2></a>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
  
  </section>
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m govuk-!-font-size-27">Use</h2>
    <p class="govuk-body">The project repository is public and under the MIT license.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ pkg.repository.url | replace(".git", "") }}">View this project on GitHub</a></p>
  </section>
</div>
