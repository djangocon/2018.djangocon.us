# 2017.djangocon.us Website

The 2017 DjangoCon.us website is a static site compiled with [Jekyll](https://jekyllrb.com/docs/home/). The frontend relies heavily on the [Foundation](http://foundation.zurb.com/sites/docs/) framework. Frontend dependencies are installed and updated with [Bower](https://bower.io/), and complied for production using [Gulp](http://gulpjs.com/).

##Local development

### Install Jekyll
```bash
$ gem install jekyll bundler
$ bundle install
```

###Install gulp

Jekyll will compile sass out of the box, but we're using gulp so we can add autoprefixer
and whatever else we might need later.

```bash
$ bower install
# installs dependencies listed in bower.json
$ npm install .
# installs dependencies listed in package.json, including gulp.
```

## Run jekyll
```bash
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

## Run gulp

For CSS development, open a new terminal in your project directory and run
the following. This will run the gulp watch scripts to compile sass.

```bash
$ gulp
```
