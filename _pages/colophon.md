---
layout: default
title: Colophon
heading: Colophon
permalink: /colophon/
description: Thank you to those who have inspired us
---

We are grateful to the past organizers of DjangoCon US and of other events for their help and inspiration. The following is an incomplete list of organizations and conferences whose positive example, advice, and generosity have helped make DjangoCon US the welcoming conference it is today.

## Organization

- [Geek Feminism Wiki](http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy), Code of Conduct
- [AlterConf](https://www.alterconf.com/speak), speaker slide guidelines
- [DjangoCon Europe](https://2016.djangocon.eu), Code of Conduct Transparency Report
- [DjangoCon Europe](https://2015.djangocon.eu), speaker mentorship program

## Website Design

This website is based on free and open source software, and was designed by our friends at [YupGup](http://yupgup.com/).

- [Jekyll](https://jekyllrb.com/)
- [Foundation](https://foundation.zurb.com/sites/docs/)
- [PyCon Australia](https://2018.pycon-au.org/colophon/), for this colophon
- [Styleguide](/styleguide/), to see the fonts and colors used in this website

## Image Credits

- [Group visit to ENIAC](https://www.flickr.com/photos/144080672@N05/28810970252/in/album-72157672216515946/), Bartek Pawlik, CC BY-NC 2.0
- [Spokane Crowd](https://www.flickr.com/photos/144080672@N05/36937531752/), Adam Fast, with permission
- [San Diego Marriott Mission Valley](https://www.marriott.com/hotels/travel/sanmv-san-diego-marriott-mission-valley/), courtesy of the hotel

<div class="partner-footer section-pad">
  <h3 class="v-pad-bottom text-left">Our Sponsors</h3>
{% assign sponsors_by_level = "Platinum|Gold|Silver|Bronze|Diversity & Inclusion|Community" | split: "|" %}
{% for level in sponsors_by_level %}
  <h4 class="lead min text-center swatch-color-teal">{{ level }}</h4>
  <div class="row partner-list">
    {% for sponsor in site.sponsors %}
      {% if sponsor.level == level %}
        {% unless sponsor.hidden %}
          <div class="partner-block text-center">
            <a href="{{ sponsor.url_target }}">
              <img
                class="partner-logo {{ sponsor.logo_orientation }}"
                src="{{ sponsor.logo }}"
                alt="{{ sponsor.name }} Logo" />
            </a>
          </div>
        {% endunless %}
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}

</div>
