---
sitemap: false
---
The project uses [kramdown](https://kramdown.gettalong.org/) which has an excellent [one page reference](https://kramdown.gettalong.org/syntax.html) on its syntax. In general you should try to keep content simple so there's less of a chance for something to go wrong. That said, this post serves as a test for new post design.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺ So is emoji :smiley: :clap:


An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~
{: .language-python}


### An h3 header ###

You can create a nested list:

 1. Start by checking out the code:

      * Go to the repo and click "Clone or download"
      * Click the copy icon that appears on the right.
      * Run `git clone <repo url>` where `<repo url>` is the URL you just copied.

 2. Do a little dance.

 3. Things should be properly cloned now:

        Make some changes.
        Make sure you test your code.
        Did you really test it? Like, even in Internet Explorer?
        Wow, you're good.
        Ok, you can type `git commit -a` to add the files you changed.
        Create a commit message.
        Ok, `git push`.
        Congrats. The world is better.

    Maybe you need to do a pull request?

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Let's randomly embed a video:

<div class="responsive-embed widescreen">
<iframe width="640" height="360" src="https://www.youtube.com/embed/Hm3JodBR-vs" frameborder="0" allowfullscreen></iframe>
</div>

Because to wrap videos in `.responsive-embed` so they work responsively!


Tables can look like this:

| First cell|Second cell|Third cell
| First | Second | Third |

First | Second | | Fourth |

***

Here's a definition list:

django
  : Great for making web apps

spokane
  : An excellent place to host a conference

Europe
  : Not where DjangoCon US is held

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Images look like this:

![example image](https://placem.at/people?w=600&h=600 "A super image")

You can even embed math:

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
