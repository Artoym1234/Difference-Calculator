install: install-deps
	npx simple-git-hooks

install-deps: 
	npm ci

lint: 
	npx eslint .

test: 
	npm test

gendiff:
	bin/gendiff.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish --dry-run