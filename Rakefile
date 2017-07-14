require 'html-proofer'

task :test do
  sh 'bundle exec jekyll build'
  options = {
    :assume_extension => true,
    :check_html => true,
    :checks_to_ignore => [
        'ImageCheck'
    ],
    :file_ignore => [
        /styleguide/,
        /404.html/,
        /homepage-full.html/,
        /schedule/
    ],
    :url_ignore => [
        /pgexperts.com/
    ]
  }
  HTMLProofer.check_directory('./_site/', options).run
end

task :default => 'test'
