#!/usr/bin/env ruby

require 'html-proofer'

task :test do
  sh 'bundle exec jekyll build'
  options = {
    :assume_extension => true,
    :checks_to_ignore => [
        'ImageCheck'
    ],
    :file_ignore => [
        /styleguide/,
        /404.html/,
        /homepage-full.html/,
        /schedule/
    ],
    :only_4xx => true,
    :url_ignore => [
        /pgexperts.com/,
        /aaspokane.org/,
        /speakerdeck.com/  # Remove after https://speakerdeck.com/andrewgodwin/ is fixed
    ]
  }
  HTMLProofer.check_directory("./_site", options).run
end

task :default => 'test'
