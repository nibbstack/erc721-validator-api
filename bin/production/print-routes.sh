#!/bin/sh

. ./bin/production/env.sh

echo 'Retrieving routes ...'
node ./dist/scripts/print-routes.js
echo 'Done!'
