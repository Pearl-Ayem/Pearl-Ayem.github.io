---
layout: page
title: Featured & Press
permalink: /press/
description: Interviews, features, and media appearances.
nav: true
nav_order: 4
---

<div class="press">
  {%- assign sorted_press = site.press | sort: "date" | reverse -%}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    {%- for item in sorted_press -%}
      <div class="col">
        <a href="{{ item.url | relative_url }}">
          <div class="card h-100 hoverable">
            {% if item.thumbnail %}
              {%
                include figure.liquid
                loading="eager"
                path=item.thumbnail
                sizes="350px"
                alt=item.title
                class="card-img-top"
              %}
            {% endif %}
            <div class="card-body">
              <h2 class="card-title">{{ item.title }}</h2>
              {% if item.source %}
                <p class="card-subtitle text-muted mb-2">
                  {{ item.source }}{% if item.date %} &middot; {{ item.date | date: "%b %Y" }}{% endif %}
                </p>
              {% endif %}
              {% if item.excerpt %}
                <p class="card-text">{{ item.excerpt }}</p>
              {% endif %}
            </div>
          </div>
        </a>
      </div>
    {%- endfor %}
  </div>
</div>
