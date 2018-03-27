# Contributing to DjangoCon US 2018

:thumbsup: :tada: Thank you so much for taking the time to contribute! :tada: :thumbsup:

The following is a set of guidelines for contributing to DjangoCon US 2018.


## How Can I Help?

Start looking through the [Issues](https://github.com/djangocon/2018.djangocon.us/issues) and watch out for any issues with the yellow label [`up-for-grabs`](https://github.com/djangocon/2018.djangocon.us/labels/up-for-grabs). Issues marked with this label haven't been assigned to anyone yet and we would love for you to work on them.


## Difficulty Levels

Here's a quick guide to help you understand what the different difficulty labels mean that you will find while looking through the issues:

[`difficulty: easy`](https://github.com/djangocon/2018.djangocon.us/labels/difficulty%3A%20easy): Fixing this issue doesn't require a lot of time or programming knowledge. This would be a great issue for someone new to programming or open source to work on.
[`difficulty: medium`](https://github.com/djangocon/2018.djangocon.us/labels/difficulty%3A%20medium): This is an issue which requires more time or programming knowledge than a `difficulty: easy` issue but you don't have to be a programming expert to fix it.
[`difficulty: hard`](https://github.com/djangocon/2018.djangocon.us/labels/difficulty%3A%20hard): This issue probably requires some time or a good bit of programming knowledge and could be a challenge, but this shouldn't keep you from trying to submit a patch for it :wink:

## Reporting bugs

If you find any bugs, it would be great if you would let us know so we can look into it. You can do so by creating an issue. If you don't know how to create an issue, please follow [these instructions](https://help.github.com/articles/creating-an-issue/). Screenshots and notes for how you encountered the bug are really helpful when reporting bugs!

### Checklist for Reporting an Issue

When submitting an issue to the DjangoCon US website repo, please follow these guidelines:

- [ ] Please review the [Contribution Guidelines](CONTRIBUTING.md) if you have not already
- [ ] Review existing open issues to ensure that your issue hasn't already been reported
- [ ] For bug reports:
  - [ ] Provide as much relevant detail as possible, including:
    - your operating system
    - your browser
    - steps you took to encounter this bug
  - [ ] Format with:
    - Expected behavior
    - Actual behavior
    - Steps to take to repeat the error behavior
- [ ] For feature requests:
  - [ ] Provide convincing reasons why this feature would help conference attendees, speakers, or sponsors

### Sample Issue Report

**Subject**: Broken link to hotel booking website

**Description**:

**Expected behavior**: Clicking on the hotel booking link allows me to book a hotel

**Actual behavior**: The link to book a hotel leads to a 404 page.

**Steps to repeat behavior**:
- Navigate to this page on the DjangoCon site: [link to page]
- Click on the link to "Book your hotel now!" in the second paragraph: [link to booking site]


## Creating Pull Requests

After you've created a patch that fixes an issue, please submit a pull request for it. If you're not sure how to create a pull request, please follow [these instructions](https://help.github.com/articles/creating-a-pull-request/). In general we'd like to ask you to please target the **development** branch with your pull requests.

### Pull Request Checklist

When submitting a pull request to the DjangoCon US website repo, please follow these guidelines:

- [ ] Please review the [Contribution Guidelines](CONTRIBUTING.md) if you have not already
- [ ] If you are closing an outstanding issue, tag the issue in your pull request comment
- [ ] Follow the [Git Commit Message StyleGuide](https://github.com/slashsBin/styleguide-git-commit-message) when possible
- [ ] Include a description of your commits
- [ ] Make sure you are targeting the correct branch (usually `develop`, but check the [Contribution Guidelines](CONTRIBUTING.md) if you aren't sure)

### Sample Pull Request:

**Subject:** :hammer: Add signup dates to sponsors

**Description:**

Closes #42.

Changes proposed in this PR:
- For frontmatter of each sponsor file, adds a 'date-joined' variable
- Sorts sponsors by date joined in templates


## Reviewing Issues and Pull Requests

You're welcome to review issues and pull requests, provide feedback, and answer questions. Please remember to be friendly and respectful when commenting on issues or pull requests, and always follow our [Code of Conduct](https://www.djangoproject.com/conduct/). It's okay for people to make mistakes and ask questions!


## How Can I Get Help?

If you have a question or need help, please leave a comment on the issue you have a question about or are working on. We will try to answer your question and help you as soon as possible.


## Code of Conduct

As a contributor, you can help us keep the Django community open and inclusive. Please read and follow our [Code of Conduct](https://www.djangoproject.com/conduct/), and report unacceptable behavior to <a href="mailto:conduct@djangocon.us">conduct@djangocon.us</a>.
