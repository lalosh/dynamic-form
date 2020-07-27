#!/bin/bash

vim package.json # to update version
vim projects/dynamic-form/package.json


git add -A
git commit
git push origin master

ng build dynamic-form --prod

cd ./dist/dynamic-form

npm publish --access public
