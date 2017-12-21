require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
    :assume_extension => true,
    :checks_to_ignore => [
        "ImageCheck"
    ],
    :disable_external => true,
    :file_ignore => [
        /styleguide/,
        /404.html/
    ]
  }
  HTMLProofer.check_directory("./_site", options).run
end
