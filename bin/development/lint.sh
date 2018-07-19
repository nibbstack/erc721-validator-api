#!/bin/sh

echo 'Verifying source code ...'
./node_modules/.bin/tslint './src/**/*.ts?(x)'
echo 'Done!'
