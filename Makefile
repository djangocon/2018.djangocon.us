
.PHONY: build
build:
	bundle exec jekyll build

.PHONY: deploy
deploy:
	surge --project ./_site/ --domain djangocon.surge.sh

.PHONY: test
test:
	bundle exec rake test
