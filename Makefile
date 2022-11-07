install: 
	npm ci

run:
	bin/gendiff.js 10

lint: 
	npx eslint .

test: 
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish