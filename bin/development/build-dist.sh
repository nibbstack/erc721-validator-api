#!/bin/sh

rm -Rf ./dist

echo 'Transpiling to ./dist ...'
./node_modules/.bin/tsc
echo 'Done!'
