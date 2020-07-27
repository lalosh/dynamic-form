#!/bin/bash

cd ./dist/dynamic-form
vim package.json # to update version
npm publish --access public
