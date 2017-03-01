---
title: Organizers
permalink: /about/organizers/
layout: organizers
description: DjangoCon US is dedicated to providing a fun harassment-free conference experience for everyone, regardless of gender, gender identity, sexual orientation, disability, physical appearance, body size, race, or religion.
heading: Organizers
---


## Subhead

Intro paragraph. There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
{: .lead}

<div class="row organizers">

{% for organizer in site.data.organizers.organizers %}
<div class="column small-6 medium-4 large-3">
  <div class="profile">
    <img
      class="thumbnail"  data-interchange="[https://placem.at/people?w=600&h=600, small], [https://placem.at/people?w=400&h=400, medium]">
    <div markdown="1">
      ### {{ organizer.name }}
      This is what Jane does.
    </div>
    <ul class="social-icons">
      <li>
        <a class="twitter" href="https://twitter.com/djangocon" target="_blank">
          <svg class="twitter-icon"><use xlink:href="#twitter-icon"></use></svg>
        </a>
      </li>
      <li>
        <a class="github" href="https://github.com/djangocon/" target="_blank">
          <svg class="social-icon"><use xlink:href="#github-icon"></use></svg>
        </a>
      </li>
    </ul>
  </div><!--/.profile -->
</div><!--/.column -->
{% endfor %}

</div><!--/.row -->
