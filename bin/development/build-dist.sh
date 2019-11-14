#!/bin/sh
rm -Rf ./dist

echo 'Transpiling to ./dist ...'
./node_modules/.bin/tsc
cp package.json dist/package.json
cp -R node_modules dist/node_modules
echo 'Done!'