# 2017.djangocon.us Website

The 2017 DjangoCon.us website is a static site compiled with [Jekyll](https://jekyllrb.com/docs/home/). The frontend relies heavily on the [Foundation](http://foundation.zurb.com/sites/docs/) framework. Frontend dependencies are installed and updated with [npm](https://www.npmjs.com/), and complied for production using [Gulp](http://gulpjs.com/).

## Code of Conduct

As a contributor, you can help us keep the Django community open and inclusive.
Please read and follow our [Code of Conduct](https://www.djangoproject.com/conduct/).

## Getting Started

Get started contributing by reading our [Contributing](CONTRIBUTING.md) guidelines. 

## Contributing via Browser

1. Navigate to the [DjangoCon U.S. website repo](https://github.com/djangocon/2017.djangocon.us) on GitHub. In the upper right hand corner of the repo, click the "Fork" button. Alternatively, click on an individual file and click the pencil icon. GitHub will automatically fork the repo for you. 

2. Head over to your GitHub account, where you will find the forked repo. This is a copy of the official code. Your changes to this forked code will not affect the official code, unless you submit a pull request and an admin merges your pull request. 

3. For changes that do not need to be tested locally, the change can be made and submitted in the browser, without cloning the repo locally. 

4. Within your forked repo, make sure the "Branch" tab is set to "develop" branch. During development, most updates are made to the branch being used for development (in this case, the ["develop" branch](https://github.com/djangocon/2017.djangocon.us/tree/develop)) and merged by an admin with the master branch when ready for production. 

5. Once you are on the correct branch, navigate to the file you intend to change and click the pencil icon to open it. Make the change and click the "Commit changes" button. 

6. Staying within your forked repo, navigate back to the main page of the branch (note: your pull request should be submitted via your forked repo, not the main repo). Click "New pull request." Click the "Commit changes" button. At the "Comparing changes" page, double check that you are happy with your proposed change. If so, click "Create pull request." Add a descriptive title and comment if applicable, then click "Create pull request" at the bottom to submit. An admin will review your proposed change, merge it, or give you feedback. 

### Example: Updating Organizer Info

Follow the above instructions to 5. Click on the _data folder, then organizers.yml file. Click on the pencil icon to open the file. Make your changes, making sure that your information is placed within quotation marks. To add a photo: navigate to the static/img/organizers folder. Click "Upload files". Drag or choose your photo file into the window. Click "Commit changes". Your photo should now be in the folder. Ideally, the photo should be 600 x 600. In the organizers.yml file, make sure the path to your photo has the proper name and file ending (.jpg, .png, etc.). If you need assistance, please ask! Complete step 6. 

## Contributing via Local Development

For changes that require cloning/running the code locally, follow the instructions to step 5. Instead of navigating to the file through the browser, open up your computer terminal (you will need to have git installed locally and probably a code editor of your choice). 

Clone your forked repo locally via the terminal, replacing the username in the URL with your own (note: not all operating systems will use a $ as a terminal prompt). 

```bash
$ https://github.com/your-username/2017.djangocon.us
```

Change directory into the folder

```bash
$ cd 2017.djangocon.us
```

To work on the development branch (called "develop"), change to that branch

```bash
$ git checkout develop
```

Verify that you are on the develop branch   

```bash
$ git branch
```

Follow the instructions below to run the website on a local server. GitHub recommends using [Bundler](http://bundler.io/) to install and run Jekyll. [Ruby](https://www.ruby-lang.org) is a pre-requisite. See the [Jekyll Quick-start Guide](https://jekyllrb.com/docs/quickstart/) for more info. 

### Install Jekyll
```bash
$ gem install jekyll bundler
$ bundle install
```

### Install gulp

Jekyll will compile sass out of the box, but we're using gulp so we can add autoprefixer
and whatever else we might need later.

```bash
$ npm install .
# installs dependencies listed in package.json, including gulp.
```

### Run jekyll
```bash
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

### Run gulp

For CSS development, open a new terminal in your project directory and run
the following. This will run the gulp watch scripts to compile sass.

```bash
$ gulp
```

### Pushing to GitHub and Submitting a Pull Request

After you have made your changes, you will need to push the local files with the changes back to GitHub in order to submit a pull request. Assuming you are still on the "develop" branch, you will be pushing your changes from the local "develop" branch to the "develop" branch of the forked repo at your GitHub account. 

```bash
$ git add .
$ git commit -m "Your note" 
$ git push origin develop
```

You will then resume the process at step 6 to submit a pull request. 

If you plan to continue working locally and submitting pull requests, you may want to add an upstream remote locally that points to DjangoCon U.S., in order to fetch changes. 

## License

[MIT License](LICENSE)
