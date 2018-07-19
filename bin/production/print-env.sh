#!/bin/sh

. ./bin/production/env.sh

echo 'Retrieving environment variables ...'
node ./dist/scripts/print-env.js
echo 'Done!'
