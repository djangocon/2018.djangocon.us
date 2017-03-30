source "https://rubygems.org"
ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#

# gem "octopress-autoprefixer"
# gem "sass"
# gem "uglifier"
gem "jekyll"
gem "mini_magick"

gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-redirect-from'
    gem 'jekyll-seo-tag'
    gem 'jekyll-sitemap'
end

group :test do
  gem 'rake'
  gem 'html-proofer'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
