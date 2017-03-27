require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
    :assume_extension => true,
    :checks_to_ignore => [
        "ImageCheck"
    ],
    :file_ignore => [
        /styleguide/,
        /404.html/,
        /homepage-full.html/,
        /schedule/
    ]
  }
  HTMLProofer.check_directory("./_site", options).run
end
