#!/bin/sh
rm -Rf ./node_modules
rm -Rf ./package-lock.json
npm i --silent
npm run development:build-dist
npm run update