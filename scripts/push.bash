#!/bin/bash

git add -A
git commit
git push origin master

vim package.json # to update version
vim projects/dynamic-form/package.json

ng build dynamic-form --prod

cd ./dist/dynamic-form

npm publish --access public
